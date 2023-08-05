'use client';

import Image from 'next/image';

import getAge from '@/app/actions/getAge';
import { SafePet, SafeUser } from '@/app/types';
import { toCamelCase } from '@/app/utils/toCamelCase';
import Heading from '../Heading';
import HeartButton from '../HeartButton';
import ShareButton from '../ShareButton';
import SaveButton from '../SaveButton';

interface PetHeadProps {
	id: string;
	pet: SafePet;
	currentUser: SafeUser | null;
}

const PetHead: React.FC<PetHeadProps> = ({ id, pet: data, currentUser }) => {
	const age = getAge({ data });
	const { name, breed, gender, imageSrc } = data;

	return (
		<>
			<div className='flex justify-between'>
				<div>
					<Heading title={breed} subtitle={'TODO: Country of Origin'}/>
				</div>
				<div className='flex place-self-end'>
					<ShareButton petId={id} currentUser={currentUser}/>
					<SaveButton petId={id} currentUser={currentUser}/>
				</div>
			</div>
			<div className='grid grid-cols-2 gap-2'>
				{/* Cover Image */}
				<div className='w-full aspect-square overflow-hidden rounded-2xl relative'>
					<Image
						alt="Image"
						src={imageSrc}
						fill
						className="object-cover w-full"
					/>
				</div>
				
				{/* Grid of 4 Images 
					TODO: Map the array of visual assets stored for this listing into an Image element 
				*/}
				<div className='grid grid-cols-2 gap-2'>
					<div className='w-full aspect-square overflow-hidden rounded-2xl relative'>
						<Image
							alt="Image"
							src={imageSrc}
							fill
							className="object-cover w-full"
						/>
					</div>
					<div className='w-full aspect-square overflow-hidden rounded-2xl relative'>
						<Image
							alt="Image"
							src={imageSrc}
							fill
							className="object-cover w-full"
						/>
					</div>
					<div className='w-full aspect-square overflow-hidden rounded-2xl relative'>
						<Image
							alt="Image"
							src={imageSrc}
							fill
							className="object-cover w-full"
						/>
					</div>
					<div className='w-full aspect-square overflow-hidden rounded-2xl relative'>
						<Image
							alt="Image"
							src={imageSrc}
							fill
							className="object-cover w-full"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PetHead;
