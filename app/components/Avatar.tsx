'use client';

import Image from 'next/image';

interface AvatarProps {
	src: string | null | undefined;
	small?: boolean;
	large?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, small, large }) => {
	return (
		<Image
			className="rounded-full"
			height={small ? 20 : large ? 60 : 30}
			width={small ? 20 : large ? 60 : 30}
			alt="Avatar"
			src={src || '/images/placeholder.jpg'}
		/>
	);
};

export default Avatar;
