'use client';

import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import Container from '../Container';
import AnalyticsButton from './AnalyticsButton';
import BibblecareButton from './BibblecareButton';
import Logo from './Logo';
import Pages from './Pages';
import Search from './Search';
import UserMenu from './UserMenu';

interface NavbarProps {
	currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	const router = useRouter();

	return (
		<div className="fixed w-full bg-white z-50 pb-4">
			<div className="py-6 shadow-md">
				<Container>
					<div
						className="
							flex
							flex-row
							items-center
							justify-between
							w-full
							gap-4
							md:gap-8
						"
					>
						<Logo />
						<Search />
						<div className="flex flex-row items-center gap-4">
							<AnalyticsButton />
							<BibblecareButton />
							<UserMenu currentUser={currentUser} />
						</div>
					</div>
				</Container>
			</div>
			{/* <div className="flex flex-row justify-center">
				<Pages />
			</div> */}
		</div>
	);
};

export default Navbar;
