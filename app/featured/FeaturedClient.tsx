'use client';

import Image from 'next/image';

interface FeaturedClientProps {}

const FeaturedClient: React.FC<FeaturedClientProps> = ({}) => {
	return (
		<div className="flex flex-col h-[100vh] justify-center items-center gap-8 pb-72">
			<div className="font-bold text-2xl pb-16">
				Featured under construction...
			</div>
			<Image
				alt="Coming Soon!"
				className="rounded-full shadow-inner-xl"
				height={800}
				width={800}
				src="/images/rescue.jpeg"
			/>
		</div>
	);
};

export default FeaturedClient;
