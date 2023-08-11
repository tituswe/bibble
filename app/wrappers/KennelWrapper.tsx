'use client';

import { useEffect, useState } from 'react';
import Pages from '../components/Pages';

interface KennelWrapperProps {
	children: React.ReactNode;
}

const KennelWrapper: React.FC<KennelWrapperProps> = ({ children }) => {
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
			<div className="flex justify-center py-2 sticky top-6 z-40">
				<Pages scrollY={scrollY} />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default KennelWrapper;
