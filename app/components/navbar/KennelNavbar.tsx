import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import { BiNetworkChart } from 'react-icons/bi';
import Container from '../Container';
import LabelButton from './LabelButton';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

interface KennelNavbarProps {
	currentUser?: SafeUser | null;
}

const KennelNavbar: React.FC<KennelNavbarProps> = ({ currentUser }) => {
	const router = useRouter();
	const services = [
		{
			label: 'Switch to Business',
			icon: BiNetworkChart,
			onClick: () => router.push('/business'),
		},
	];

	return (
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
						<LabelButton
							key={i}
							label={service.label}
							icon={service.icon}
							onClick={service.onClick}
						/>
					))}
					<UserMenu currentUser={currentUser} />
				</ol>
			</div>
		</Container>
	);
};

export default KennelNavbar;
