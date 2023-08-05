'use client';

import { BiUpload } from 'react-icons/bi';

import { SafeUser } from '../types';

interface ShareButtonProps {
	petId: string;
	currentUser?: SafeUser | null;
}

const ShareButton: React.FC<ShareButtonProps> = ({ petId, currentUser }) => {
	// const { showSharePopup, toggleSharePopup } = ;
	return (
		<>
			<div
				// onClick={toggleSharePopup}
				className="
                flex
                hover:opacity-80
                transition
                cursor-opinter
                "
			>
                <BiUpload size={21}/>
                <p className='px-2'>Share</p>
			</div>
		</>
	);
};

export default ShareButton;
