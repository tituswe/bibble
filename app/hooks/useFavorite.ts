import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';

import { SafeUser } from '../types';

import useLoginModal from './useLoginModal';

interface IUseFavorite {
	petId: string;
	currentUser?: SafeUser | null;
}

const useFavorite = ({ petId, currentUser }: IUseFavorite) => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const hasFavorited = useMemo(() => {
		const list = currentUser?.favoriteIds || [];

		return list.includes(petId);
	}, [currentUser, petId]);

	const toggleFavorite = useCallback(
		async (e: React.MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();

			if (!currentUser) {
				return loginModal.onOpen();
			}

			try {
				let request;

				if (hasFavorited) {
					request = () => axios.delete(`/api/favorites/${petId}`);
				} else {
					request = () => axios.post(`/api/favorites/${petId}`);
				}

				await request();
				router.refresh();
				toast.success(
					hasFavorited ? 'Removed from favorites' : 'Added to favorites'
				);
			} catch (error) {
				toast.error('Something went wrong');
			}
		},
		[currentUser, hasFavorited, loginModal, petId, router]
	);

	return {
		hasFavorited,
		toggleFavorite,
	};
};

export default useFavorite;
