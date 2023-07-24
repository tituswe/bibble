'use client';

import { IconType } from 'react-icons';

interface PetBreedProps {
	icon: IconType;
	label: string;
}

const PetBreed: React.FC<PetBreedProps> = ({ icon: Icon, label }) => {
	return (
		<>
			<div className="flex flex-col gap-6">
				<div className="flex flex-row items-center gap-4">
					<Icon size={40} className="text-neutral-600" />
					<div className="flex flex-col">
						<div className="text-lg font-semibold">{label}</div>
						<div className="text-neutral-500 font-light">
							Breed description to be added
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PetBreed;
