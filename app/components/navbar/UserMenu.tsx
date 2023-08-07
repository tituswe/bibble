'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { IconType } from 'react-icons';

import useLoginModal from '@/app/hooks/useLoginModal';
import usePostModal from '@/app/hooks/usePostModal';

import { SafeUser } from '@/app/types';
import { BiBell, BiHeart, BiLogOutCircle } from 'react-icons/bi';
import { LuSettings } from 'react-icons/lu';
import Avatar from '../Avatar';
import Button from './Button';
import MenuItem from './MenuItem';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

type NavButton = {
	onClick: () => void;
	icon: IconType;
	disabled?: boolean;
};

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const loginModal = useLoginModal();
	const postModal = usePostModal();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const navButtons: NavButton[] = [
		{
			onClick: () => router.push('/favorites'),
			icon: BiHeart,
			disabled: true,
		},
		{
			onClick: () => router.push('/messages'),
			icon: BiBell,
			disabled: true,
		},
		{
			onClick: () => router.push('/settings'),
			icon: LuSettings,
			disabled: true,
		},
		{
			onClick: () => signOut(),
			icon: BiLogOutCircle,
		},
	];

	const toggleOpen = useCallback(() => {
		if (!currentUser) {
			loginModal.onOpen();
		} else {
			setIsOpen((value) => !value);
		}
	}, [loginModal, currentUser]);

	const onPost = useCallback(() => {
		if (!currentUser) {
			return loginModal.onOpen();
		}

		postModal.onOpen();
	}, [currentUser, loginModal, postModal]);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				{navButtons.map((button, i) => (
					<Button
						key={i}
						onClick={button.onClick}
						icon={button.icon}
						disabled={button.disabled}
					/>
				))}
				<div className="block lg:hidden">
					<div
						onClick={toggleOpen}
						className="
        			relative
        			w-10
        			h-10 
        			border 
        			rounded-full 
        			flex 
        			items-center 
        			justify-center
							cursor-pointer
							hover:scale-110
							hover:shadow-md
							text-neutral-300
						"
					>
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
							<MenuItem onClick={postModal.onOpen} label="Post a pet" />
							<hr />
							<MenuItem
								onClick={() => router.push('/postings')}
								label="My postings"
							/>
							<MenuItem
								onClick={() => router.push('/favorites')}
								label="My favorite pets"
							/>
							<MenuItem onClick={() => {}} label="Profile" />
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
