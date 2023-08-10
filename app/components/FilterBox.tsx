'use client';

import { useEffect, useState } from 'react';
import { BiSlider } from 'react-icons/bi';
import useSearchModal from '../hooks/useSearchModal';

const FilterBox = () => {
	const [scrollY, setScrollY] = useState(0);
	const isUnlocked = scrollY > 24;
	const searchModal = useSearchModal();

	const handleOnClick = async () => {};

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="p-4">
			<div
				onClick={searchModal.onOpen}
				className={`
        flex
        flex-row
        items-center
        justify-center
        gap-2
        p-6
        rounded-3xl
        text-neutral-800
        bg-white
				w-auto
        cursor-pointer
        transition
        duration-300
        hover:shadow-lg
        ${isUnlocked && 'shadow-lg'}
      `}
			>
				<BiSlider size={26} />
				<div className="font-medium text-sm">Filters</div>
			</div>
		</div>
	);
};

export default FilterBox;
