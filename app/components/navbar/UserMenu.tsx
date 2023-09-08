'use client';

import { signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import useLoginModal from '@/app/hooks/useLoginModal';

import { useDropdown } from '@/app/hooks/useDropdown';
import { SafeUser } from '@/app/types';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

type MenuItemType = {
	label: string;
	onClick: () => void;
};

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const router = useRouter();
	const pathname = usePathname();
	const page = pathname?.split('/')[1];
	const loginModal = useLoginModal();
	const { isOpen, setIsOpen, dropdownRef, handleClickOutside } = useDropdown();

	const kennelItems: Array<MenuItemType | null> = [
		{
			label: 'Bibble Business',
			onClick: () => router.push('/business'),
		},
		null,
		{
			label: 'Favorites',
			onClick: () => router.push('/favorites'),
		},
		{
			label: 'Messages',
			onClick: () => router.push('/messages'),
		},
		{
			label: 'Settings',
			onClick: () => router.push('/settings'),
		},
		null,
	];

	const businessItems: Array<MenuItemType | null> = [
		{
			label: 'Bibble Kennel',
			onClick: () => router.push('/kennel'),
		},
		null,
		{
			label: 'Dashboard',
			onClick: () => router.push('/dashboard'),
		},
		{
			label: 'Messages',
			onClick: () => router.push('/messages'),
		},
		{
			label: 'Settings',
			onClick: () => router.push('/settings'),
		},
		null,
	];

	let menuItems: Array<MenuItemType | null> = [
		{
			label: 'Help Center',
			onClick: () => router.push('/help'),
		},
		{
			label: 'Log out',
			onClick: () => signOut(),
		},
	];

	switch (page) {
		case 'kennel': {
			menuItems = [...kennelItems, ...menuItems];
			break;
		}
		case 'business': {
			menuItems = [...businessItems, ...menuItems];
			break;
		}
		default:
	}

	const toggleOpen = useCallback(() => {
		if (!currentUser) {
			loginModal.onOpen();
		} else {
			setIsOpen((value) => !value);
		}
	}, [loginModal, setIsOpen, currentUser]);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<div className="relative" ref={dropdownRef}>
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={toggleOpen}
					className="
        			relative
        			border-[1px]
							border-neutral-200
        			rounded-full 
        			flex 
        			items-center 
        			justify-center
							cursor-pointer
							hover:scale-110
							hover:bg-neutral-200
							hover:shadow-md
							transition
						"
				>
					{currentUser ? (
						<div
							className="
							relative
							flex
        			items-center 
        			justify-center
							w-10
							h-10
						"
						>
							<Avatar src={currentUser?.image} />
						</div>
					) : (
						<div
							className="
							p-4
							h-10
							px-4
							text-sm
							font-semibold
							flex
							items-center
							gap-3
							whitespace-nowrap
							"
						>
							Sign In
						</div>
					)}
				</div>
			</div>
			{isOpen && currentUser && (
				<div
					className="
            absolute 
            rounded-xl 
            shadow-md 
						w-72
            bg-white 
            overflow-hidden
            right-0
            top-12
            text-sm"
				>
					<div className="flex flex-col cursor-pointer">
						<>
							{menuItems.map((item, i) =>
								item ? (
									<MenuItem key={i} label={item.label} onClick={item.onClick} />
								) : (
									<hr key={i} />
								)
							)}
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
