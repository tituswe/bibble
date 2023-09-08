'use client';

import Image from 'next/image';

const ListingBox = () => {
	return (
		<div className="flex flex-row items-center gap-4 w-full">
			<Image
				className="rounded-xl"
				src="https://res.cloudinary.com/dcbphkd0o/image/upload/v1691233383/juam8bpb5ezi7ealzhdy.png"
				width={60}
				height={60}
				alt="listing image"
			/>
			<label
				className="
							text-md
							text-neutral-800
							font-semibold
						"
			>
				Golden Retriever
			</label>
		</div>
	);
};

export default ListingBox;
