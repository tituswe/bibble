'use client';

import { useMemo } from 'react';

import Container from '@/app/components/Container';
import { Breed, breeds } from '@/app/components/navbar/Breeds';
import PetHead from '@/app/components/pets/PetHead';
import PetInfo from '@/app/components/pets/PetInfo';
import { SafePet, SafeUser } from '@/app/types';
import AppointmentBox from '@/app/components/AppointmentBox';

interface PetClientProps {
	pet: SafePet & {
		lister: SafeUser;
	};
	currentUser: SafeUser | null;
}

const PetClient: React.FC<PetClientProps> = ({ pet, currentUser }) => {
	const breed: Breed | undefined = useMemo(() => {
		return breeds.find((item) => item.label === pet.breed);
	}, [pet.breed]);

	return (
		<Container>
			<div className="max-w-screen-lg mx-auto">
				<div className="flex flex-col gap-6">
					<PetHead id={pet.id} pet={pet} currentUser={currentUser} />
					<div
						className="
							grid
							grid-cols-2
							gap-4
							mt-6
						"
					>
						<div>
							<PetInfo pet={pet} breed={breed} user={pet.user} />
						</div>
						<div>
							<AppointmentBox pet={pet}/>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PetClient;
