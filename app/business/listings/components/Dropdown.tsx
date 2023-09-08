'use client';

import { useDropdown } from '@/app/hooks/useDropdown';
import { useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface DropdownProps {
	label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {
	const { isOpen, setIsOpen, dropdownRef, handleClickOutside } = useDropdown();

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<div className="relative inline-block" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`
          hidden
          lg:flex
          flex-row
          gap-2
          items-center
          shadow-inner-1
          rounded-full
          px-4 
          py-2 
          text-sm
          cursor-pointer
          hover:bg-neutral-100
          ${isOpen && 'font-semibold shadow-inner-2 bg-neutral-100'}
        `}
			>
				{label}
				<BiChevronDown size={20} />
			</button>

			{isOpen && (
				<div
					className="
          absolute 
          left-0 
          border 
          border-rose-500 
          mt-4
          w-56
          rounded-2xl
          shadow-2xl"
				>
					<div className="rounded-2xl bg-white">
						<a href="#" className="block px-4 py-2">
							LIST ITEM
						</a>
						<a href="#" className="block px-4 py-2">
							LIST ITEM
						</a>
						<a href="#" className="block px-4 py-2">
							LIST ITEM
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
