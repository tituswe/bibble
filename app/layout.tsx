import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

import ModalProvider from './providers/ModalProvider';
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
				<ToasterProvider />
				<BibbleWrapper>{children}</BibbleWrapper>
				<ModalProvider />
			</body>
		</html>
	);
}
