'use client';

import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import useLoginModal from '@/app/hooks/useLoginModal';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const loginModal = useLoginModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		if (!currentUser) {
			loginModal.onOpen();
		} else {
			setIsOpen((value) => !value);
		}
	}, [loginModal, currentUser]);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={toggleOpen}
					className="
            p-4
            md:py-1
            md:pr-3
            md:pl-4
            text-sm
            font-semibold
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            whitespace-nowrap
          "
				>
					{currentUser ? <AiOutlineMenu /> : 'Sign In'}
					<div className="hidden md:block">
						<Avatar src={currentUser?.image} />
					</div>
				</div>
			</div>

			{isOpen && currentUser && (
				<div
					className="
            absolute 
            rounded-xl 
            shadow-md 
            w-[20vw] 
            bg-white 
            overflow-hidden
            right-0
            top-12
            text-sm"
				>
					<div className="flex flex-col cursor-pointer">
						<>
							<MenuItem onClick={() => {}} label="Profile" />
							<MenuItem onClick={() => {}} label="My Favorite Pets" />
							<MenuItem onClick={() => {}} label="Settings" />
							<MenuItem onClick={() => {}} label="Help" />
							<hr />
							<MenuItem onClick={() => signOut()} label="Logout" />
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
