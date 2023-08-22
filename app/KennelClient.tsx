'use client';

import { useEffect, useState } from 'react';
import Pages from './components/Pages';

interface KennelClientProps {
	children: React.ReactNode;
}

const KennelClient: React.FC<KennelClientProps> = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<div className="flex justify-center pt-2 pb-4 sticky top-6 z-40">
				<Pages scrollY={scrollY} />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default KennelClient;
