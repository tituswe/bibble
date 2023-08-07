'use client';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import useFavorite from '../hooks/useFavorite';
import { SafeUser } from '../types';

interface HeartButtonProps {
	petId: string;
	currentUser?: SafeUser | null;
	showSubtext?: boolean;
}

const HeartButton: React.FC<HeartButtonProps> = ({ petId, currentUser, showSubtext }) => {
	const { hasFavorited, toggleFavorite } = useFavorite({ petId, currentUser });
	return (
		<>
			<div
				onClick={toggleFavorite}
				className="
				flex
				relative
				hover:opacity-80
				transition
				cursor-opinter
			"
			>
				{!showSubtext && <AiOutlineHeart
					size={24}
					className="
					fill-white
					absolute
					-top-[2px]
					-right-[2px]
				"
				/>}
				<AiFillHeart
					size={20}
					className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
				/>
				{showSubtext && <p className='px-2'>Save</p>}
			</div>
		</>
	);
};

export default HeartButton;
