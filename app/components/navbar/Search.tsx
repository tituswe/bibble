'use client';

import useSearchModal from '@/app/hooks/useSearchModal';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
	const searchModal = useSearchModal();

	return (
		<div
			onClick={searchModal.onOpen}
			className="
      border-[1px]
      w-full
      md:w-auto
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
      hover:scale-110
      transition
      cursor-pointer
    "
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
				<div className="sm:block">Find a best friend</div>
				<div
					className="
              p-2
              bg-sky-500
              hover:bg-sky-800
              rounded-full
              text-white
        "
				>
					<BiSearch size={18} />
				</div>
			</div>
		</div>
	);
};

export default Search;
