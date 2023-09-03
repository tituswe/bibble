import useLoginModal from '@/app/hooks/useLoginModal';
import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
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
	const loginModal = useLoginModal();

	const navigateToBusiness = useCallback(() => {
		if (!currentUser) {
			loginModal.onOpen();
		} else {
			router.push('/business');
		}
	}, [loginModal, router, currentUser]);

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
					<LabelButton
						label={'Switch to Business'}
						icon={BiNetworkChart}
						onClick={navigateToBusiness}
					/>
					<UserMenu currentUser={currentUser} />
				</ol>
			</div>
		</Container>
	);
};

export default KennelNavbar;
