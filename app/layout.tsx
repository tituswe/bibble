import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import getCurrentUser from './actions/getCurrentUser';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

import LoginModal from './components/modals/LoginModal';
import PostModal from './components/modals/PostModal';
import RegisterModal from './components/modals/RegisterModal';

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
				<PostModal />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				{children}
			</body>
		</html>
	);
}
