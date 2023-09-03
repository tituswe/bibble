'use client';

import { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface DropdownProps {
	label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="relative inline-block" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`
          flex
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
          rounded-md 
          shadow-2xl"
				>
					<div className="rounded-md bg-white">
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

	// return (
	// 	<div
	// 		className="
	//       flex
	//       justify-end
	//       border
	//       border-lime-500
	//     "
	// 	>
	// 		<div
	// 			onClick={() => setIsOpen(!isOpen)}
	// 			className="
	//       hidden
	//       lg:flex
	//       flex-row
	//       items-center
	//       gap-2
	//       border-[1px]
	//       rounded-full
	//       pl-4
	//       pr-3
	//       py-1
	//       text-sm
	//       cursor-pointer
	//       hover:bg-neutral-100
	// 		"
	// 		>
	// 			{label}
	// 			<BiChevronDown size={20} />
	// 		</div>
	// 		{isOpen && (
	// 			<div
	// 				className="
	//           absolute
	//           border
	//           border-rose-500
	//         "
	// 			>
	// 				<div
	// 					className="
	//             flex
	//             flex-col
	//           "
	// 				>
	// 					<label>LIST ITEM</label>
	// 					<label>LIST ITEM</label>
	// 					<label>LIST ITEM</label>
	// 					<label>LIST ITEM</label>
	// 					<label>LIST ITEM</label>
	// 				</div>
	// 			</div>
	// 		)}
	// 	</div>
	// );
};

export default Dropdown;
