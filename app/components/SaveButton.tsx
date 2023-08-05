'use client';

import { BiHeart } from 'react-icons/bi';

import useFavorite from '../hooks/useFavorite';
import { SafeUser } from '../types';

interface SaveButtonProps {
	petId: string;
	currentUser?: SafeUser | null;
}

const SaveButton: React.FC<SaveButtonProps> = ({ petId, currentUser }) => {
	const { hasFavorited, toggleFavorite } = useFavorite({ petId, currentUser });
	return (
		<>
			<div
				onClick={toggleFavorite}
				className="
                flex
                hover:opacity-80
                transition
                cursor-opinter
                "
			>
				<BiHeart size={21} className={hasFavorited ? 'fill-rose-500' : ''}
				/>
                <p className='px-2'>Save</p>
			</div>
		</>
	);
};

export default SaveButton;
