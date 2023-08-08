'use client';

import { useCallback, useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import LinkText from './LinkText';

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	return (
		<div
			onClick={toggleOpen}
			className={`
        fixed
        bottom-0
        h-64
        w-full
        translate
        duration-300
        ${!isOpen && 'translate-y-52'}
        bg-white
        z-50
        px-8
        border-t-[1px]
        rounded-t-3xl
        cursor-pointer
        hover:bg-opacity-95
        hover:bg-neutral-100
        hover:border-none
      `}
		>
			<div
				className="
        flex
        flex-row
        justify-between
        sticky 
      "
			>
				<div
					className="
          flex
          flex-row
        "
				>
					<LinkText>© 2023 Bibble & Co.</LinkText>
					<LinkText>Privacy</LinkText>
					<LinkText>Terms & Conditions</LinkText>
					<LinkText>Contact Us</LinkText>
				</div>
				<div
					className="
          flex
          flex-row
        "
				>
					<LinkText bold>$ SGD</LinkText>
					<LinkText bold>Support & Resources</LinkText>
					<LinkText bold>
						{isOpen ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
					</LinkText>
				</div>
			</div>
		</div>
	);
};

export default Footer;
