'use client';

import Image from 'next/image';

interface AvatarProps {
	src: string | null | undefined;
	small?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, small }) => {
	return (
		<Image
			className="rounded-full"
			height={small ? 25 : 30}
			width={small ? 25 : 30}
			alt="Avatar"
			src={src || '/images/placeholder.jpg'}
		/>
	);
};

export default Avatar;
