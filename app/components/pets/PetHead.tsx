'use client';

import Image from 'next/image';

import getAge from '@/app/actions/getAge';
import { SafePet, SafeUser } from '@/app/types';
import { toCamelCase } from '@/app/utils/toCamelCase';
import Heading from '../Heading';
import HeartButton from '../HeartButton';

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
			<Heading
				title={name}
				subtitle={`${toCamelCase(gender)} | ${breed} | ${age} Years Old`}
			/>
			<div
				className="
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
        "
			>
				<Image
					alt="Image"
					src={imageSrc}
					fill
					className="object-cover w-full"
				/>
				<div className="absolute top-5 right-5">
					<HeartButton petId={id} currentUser={currentUser} />
				</div>
			</div>
		</>
	);
};

export default PetHead;
