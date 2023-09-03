import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import { FaPaw } from 'react-icons/fa';
import Container from '../Container';
import Button from './Button';
import LabelButton from './LabelButton';
import Logo from './Logo';
import UserMenu from './UserMenu';

interface BusinessNavbarProps {
	currentUser?: SafeUser | null;
}

const BusinessNavbar: React.FC<BusinessNavbarProps> = ({ currentUser }) => {
	const router = useRouter();
	const services = [
		{
			label: 'Dashboard',
			onClick: () => router.push('/business/dashboard'),
		},
		{
			label: 'Messages',
			onClick: () => router.push('/business/messages'),
		},
		{
			label: 'Calendar',
			onClick: () => router.push('/business/calendar'),
		},
		{
			label: 'Analytics',
			onClick: () => router.push('/business/analytics'),
		},
		{
			label: 'Listings',
			onClick: () => router.push('/business/listings'),
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
					gap-8
				"
			>
				<Logo />
				<div className="hidden md:block">
					<ol className="flex flex-row">
						{services.map((service, i) => (
							<LabelButton
								key={i}
								label={service.label}
								onClick={service.onClick}
							/>
						))}
					</ol>
				</div>
				<div className="flex flex-row items-center gap-4">
					<Button icon={FaPaw} onClick={() => router.push('/kennel')} />
					<UserMenu currentUser={currentUser} />
				</div>
			</div>
		</Container>
	);
};

export default BusinessNavbar;
