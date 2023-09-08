'use client';

const ListingsPreview = () => {
	return (
		<>
			<h2 className="text-xl font-semibold"> Your Listings</h2>
			<section
				className="
					flex 
					flex-row 
					w-full 
					justify-center 
					gap-8
					py-8
					bg-neutral-200
					bg-opacity-20
					backdrop-blur-lg
					rounded-3xl
				"
			>
				<a className="p-4">Coming soon...</a>
			</section>
		</>
	);
};

export default ListingsPreview;
