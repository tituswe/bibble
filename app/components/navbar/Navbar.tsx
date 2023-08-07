'use client';

import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
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
	const router = useRouter();

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
		<div className="sticky top-0 w-full bg-white z-50">
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
							{services.map((service, i) => (
								<LabelButton
									key={i}
									label={service.label}
									icon={service.icon}
								/>
							))}
							<UserMenu currentUser={currentUser} />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Navbar;
