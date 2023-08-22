'use client';

import { useCallback, useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import LinkText from './LinkText';

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen(!isOpen);
		alert('Implement Footer');
	}, [isOpen]);

	return (
		<footer
			onClick={toggleOpen}
			className={`
				fixed
        bottom-0
        w-full
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
		</footer>
	);
};

export default Footer;
