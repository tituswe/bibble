'use client';

import { SafeUser } from '@/app/types';
import { usePathname } from 'next/navigation';
import BusinessNavbar from './BusinessNavbar';
import KennelNavbar from './KennelNavbar';

interface NavbarProps {
	currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	const pathname = usePathname();
	const page = pathname?.split('/')[1];
	let navbar = null;

	switch (page) {
		case 'kennel': {
			navbar = <KennelNavbar currentUser={currentUser} />;
			break;
		}
		case 'business': {
			navbar = <BusinessNavbar currentUser={currentUser} />;
			break;
		}
		default:
	}

	return (
		<nav
			className="
				fixed 
				py-4 
				shadow-md 
				top-0 
				w-full 
				bg-white 
				z-50
			"
		>
			{navbar}
		</nav>
	);
};

export default Navbar;
