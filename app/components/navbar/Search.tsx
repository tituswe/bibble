'use client';

import useFilterModal from '@/app/kennel/hooks/useFilterModal';
import { useState } from 'react';
import { BiSlider } from 'react-icons/bi';

const Search = () => {
	const [isOpen, setIsOpen] = useState(false);
	const filterModal = useFilterModal();

	return (
		<search
			onClick={() => setIsOpen(!isOpen)}
			className={`
        border-[1px] 
        w-full 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        cursor-pointer
        transition 
        duration-500
      `}
		>
			<div
				className="
          text-sm
          font-semibold
          pl-6 
          pr-3
          flex
          flex-row
          items-center
          justify-between
          gap-3
        "
			>
				<input
					className="
            peer
            sm:block
            w-full
            outline-none
          "
				/>
				<label
					className={`
            absolute
            duration-150
            transform
            translate-y-3
            top-5
            origin-[0]
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            peer-focus:bg-white
            peer-focus:rounded-3xl
            peer-focus:px-2
          `}
				>
					Find your best friend
				</label>
				<div
					onClick={filterModal.onOpen}
					className="
              p-2
              border
              rounded-full
              hover:shadow-md
              hover:bg-neutral-200
              hover:scale-110
              transition
            "
				>
					<BiSlider size={18} />
				</div>
			</div>
		</search>
	);
};

export default Search;
