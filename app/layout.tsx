import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';

import Providers from './providers/Providers';
import BibbleWrapper from './wrappers/BibbleWrapper';

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
	return (
		<html lang="en">
			<body className={font.className}>
				<BibbleWrapper>
					<Providers>{children}</Providers>
				</BibbleWrapper>
			</body>
		</html>
	);
}
