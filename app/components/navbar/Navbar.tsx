'use client';

import { SafeUser } from '@/app/types';
import { BiNetworkChart } from 'react-icons/bi';
import { LuPartyPopper } from 'react-icons/lu';
import Container from '../Container';
import LabelButton from './LabelButton';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

interface NavbarProps {
	currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	const services = [
		{
			label: 'Analytics',
			icon: BiNetworkChart,
		},
		{
			label: 'Bibblecare',
			icon: LuPartyPopper,
		},
	];

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
					<ol className="flex flex-row items-center gap-4">
						{services.map((service, i) => (
							<LabelButton key={i} label={service.label} icon={service.icon} />
						))}
						<UserMenu currentUser={currentUser} />
					</ol>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
