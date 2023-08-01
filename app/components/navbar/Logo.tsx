'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
	const router = useRouter();

	return (
		<Image
			onClick={() => router.push('/')}
			alt="Logo"
			className="hidden md:block cursor-pointer z-50"
			height="60"
			width="60"
			src="/images/logo.png"
		/>
	);
};

export default Logo;
