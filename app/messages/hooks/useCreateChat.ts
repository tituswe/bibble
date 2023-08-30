import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';

import { SafeUser } from '../../types';

import useLoginModal from '../../hooks/useLoginModal';

interface IUseCreateChat {
	currentUser?: SafeUser | null;
    participantId: string
}

const useCreateChat = ({ currentUser, participantId }: IUseCreateChat) => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const hasCreatedChat = useMemo(() => {
		const list = currentUser?.chats ? currentUser.chats.flatMap(participatingChat => participatingChat.chat.participants) : [];

		return list.map(participant => participant.userId).includes(participantId);
	}, [currentUser, participantId]);

    const createChat = useCallback( async () => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        try {
            let request = () => axios.post(`/api/messages/chats`, {
                currentUserId: currentUser.id,
                participantId: participantId,
            });

            await request().then((response) => {
                router.push('/messages');
            });
            router.refresh();
        } catch (error) {
            toast.error('Error at chat creation');
            console.log(error);
        }

    },
    [currentUser, loginModal, participantId, router])

	return {
        hasCreatedChat,
		createChat
	};
};

export default useCreateChat;
