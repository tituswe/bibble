'use client';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
	const registerModal = useRegisterModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		if (!false) {
			registerModal.onOpen();
		}

		setIsOpen((value) => !value);
	}, []);

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
					{false ? <AiOutlineMenu /> : 'Sign In'}
					<div className="hidden md:block">
						<Avatar />
					</div>
				</div>
			</div>

			{isOpen && false && (
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
							<MenuItem onClick={() => {}} label="Settings" />
							<MenuItem onClick={() => {}} label="Logout" />
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
