'use client';

import Image from 'next/image';

import getAge from '@/app/actions/getAge';
import { SafePet, SafeUser } from '@/app/types';
import { toCamelCase } from '@/app/utils/toCamelCase';
import Heading from '../Heading';
import HeartButton from '../HeartButton';
import ShareButton from '../ShareButton';
import SaveButton from '../SaveButton';
import { Breed, Country, Species } from '@prisma/client';

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
			<div className='flex justify-between'>
				<div>
					<Heading title={pet.breed.name} subtitle={pet.origin.name}/>
				</div>
				<div className='flex place-self-end'>
					<ShareButton petId={pet.id} currentUser={currentUser}/>
					<SaveButton petId={pet.id} currentUser={currentUser}/>
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
