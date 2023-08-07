'use client';

import { SafePet, SafeUser } from '@/app/types';
import { Breed, Country, Species } from '@prisma/client';

import Heading from '../Heading';
import ShareButton from '../ShareButton';
import HeartButton from '../HeartButton';

import Image from 'next/image';


interface PetHeadProps {
	id: string;
	pet: SafePet & {
		lister: SafeUser;
		origin: Country;
		species: Species;
		breed: Breed;
	};
	currentUser: SafeUser | null;
}

const PetHead: React.FC<PetHeadProps> = ({ id, pet, currentUser }) => {
	const images = pet.images;
	return (
		<>
			{/* Head Banner */}
			<div className='flex justify-between'>
				<div>
					<Heading title={pet.breed.name} subtitle={pet.origin.name}/>
				</div>
				<div className='flex place-self-end gap-2'>
					<ShareButton petId={pet.id} currentUser={currentUser}/>
					<HeartButton petId={pet.id} currentUser={currentUser} showSubtext/>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-2'>
				{/* Cover Image */}
				<div className='w-full aspect-square overflow-hidden rounded-2xl relative'>
					<Image
						alt="Image"
						src={images[0]}
						fill
						className="object-cover w-full"
					/>
				</div>
				
				{/* Grid of 4 Images */}
				<div className='grid grid-cols-2 gap-2'>
					{images.map((img, i) => {
						if (i < 4) {
							return (
								<div key={img} className='w-full aspect-square overflow-hidden rounded-2xl relative'>
									<Image
										alt="Image"
										src={img}
										fill
										className="object-cover w-full"
									/>
								</div>
							);
						}
					})}
				</div>
			</div>
		</>
	);
};

export default PetHead;
