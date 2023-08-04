import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import getCurrentUser from './actions/getCurrentUser';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

import LoginModal from './components/modals/LoginModal';
import PostModal from './components/modals/PostModal';
import RegisterModal from './components/modals/RegisterModal';
import SearchModal from './components/modals/SearchModal';

export const metadata: Metadata = {
	title: 'Bibble',
	description: 'Your best friend for your best friend',
};

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SearchModal />
				<PostModal />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				<div className="pb-20 pt-32">{children}</div>
			</body>
		</html>
	);
}
