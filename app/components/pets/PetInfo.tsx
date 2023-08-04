'use client';

import { Breed } from '@/app/components/navbar/Breeds';
import { SafePet, SafeUser } from '@/app/types';
import Avatar from '../Avatar';
import PetBreed from './PetBreed';

interface PetInfoProps {
	pet: SafePet;
	breed: Breed | undefined;
	user: SafeUser;
}

const PetInfo: React.FC<PetInfoProps> = ({ pet, breed, user }) => {
	const { name, birthday, gender } = pet;

	return (
		<>
			<div className="col-span-4 flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<div
						className="
              text-xl
              font-semibold
              flex
              flex-row
              items-center
              gap-2
            "
					>
						<div>Posted by {user.name}</div>
						<Avatar src={user?.image} />
					</div>
					<div
						className="
              flex
              flex-row
              items-center
              gap-4
              font-light
              text-neutral-500
            "
					>
						<div>User info to be added</div>
					</div>
				</div>
				<hr />
				{breed && <PetBreed icon={breed.icon} label={breed.label} />}
				<hr />
				<div className="text-lg font-light text-neutral-500">
					Pet description to be added
				</div>
			</div>
		</>
	);
};

export default PetInfo;
