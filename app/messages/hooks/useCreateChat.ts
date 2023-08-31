import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';

import { SafePet, SafeUser } from '../../types';

import useLoginModal from '../../hooks/useLoginModal';

interface IUseCreateChat {
	currentUser?: SafeUser | null;
    lister: SafeUser;
    listing: SafePet;
}

const useCreateChat = ({ currentUser, lister, listing }: IUseCreateChat) => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const hasCreatedChat = useMemo(() => {
		return false;
	}, [currentUser, lister]);

    const createChat = useCallback( async ( date: Date, time: Date, numberOfVisitors: number ) => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        try {
            let message = `Hi ${lister.name}, I've successfully booked a slot to visit the ${listing.breed.name} you listed on bibble! Appointment Details: Date - ${date.toLocaleDateString()}, Time - ${time.toLocaleTimeString()}, Number Of Visitors - ${numberOfVisitors} person(s). Can't wait for the visit!`;

            let request = () => axios.post(`/api/messages/chats`, {
                currentUserId: currentUser.id,
                participantId: lister.id,
                message: message.toString(),
            });

            await request().then((response) => {
                console.log('Chat created!');
                console.log(response);
                router.push('/messages');
            });

            router.refresh();
        } catch (error) {
            toast.error('Error at chat creation');
            console.log(error);
        }

    },
    [currentUser, loginModal, lister, router])

	return {
        hasCreatedChat,
		createChat
	};
};

export default useCreateChat;
