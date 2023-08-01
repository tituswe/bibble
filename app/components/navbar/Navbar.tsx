'use client';

import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BiBell, BiHeart, BiLogOutCircle } from 'react-icons/bi';
import { LuSettings } from 'react-icons/lu';
import Container from '../Container';
import AnalyticsButton from './AnalyticsButton';
import Button from './Button';
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
		<div className="fixed w-full bg-white z-50 pb-2 ">
			<div className="py-6 shadow-md">
				<Container>
					<div
						className="
							flex
							flex-row
							items-center
							justify-between
							w-full
							gap-3
							md:gap-0
						"
					>
						<div className="flex flex-row gap-16">
							<Logo />
							<Logo />
							<Logo />
						</div>
						<Search />
						<div className="flex flex-row items-center gap-4">
							<AnalyticsButton />
							{/* <BibblecareButton /> */}
							{currentUser ? (
								<>
									<Button
										onClick={() => router.push('/favorites')}
										icon={BiHeart}
									/>
									<Button
										onClick={() => router.push('/messages')}
										icon={BiBell}
									/>
									<Button onClick={() => {}} icon={LuSettings} />
									<Button onClick={() => signOut()} icon={BiLogOutCircle} />
								</>
							) : (
								<UserMenu currentUser={currentUser} />
							)}
						</div>
					</div>
				</Container>
			</div>
			<div className="flex flex-row justify-center">
				<Pages />
			</div>
		</div>
	);
};

export default Navbar;
