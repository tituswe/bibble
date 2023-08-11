import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';

import getCurrentUser from './actions/getCurrentUser';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Providers from './providers/Providers';

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
				<Providers>
					<div className="flex flex-col gap-4">
						<Navbar currentUser={currentUser} />
						<div className="h-full pt-20">{children}</div>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
