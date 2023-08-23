'use client';

import { SafePet, SafeUser } from '@/app/types';
import { Breed, Country, Species, Vaccine } from '@prisma/client';

import AppointmentBox from '@/app/components/AppointmentBox';
import Container from '@/app/components/Container';
import ListerInfo from '@/app/components/pets/ListerInfo';
import PetHead from '@/app/components/pets/PetHead';
import PetInfo from '@/app/components/pets/PetInfo';

interface PetClientProps {
	pet: (SafePet & {
		lister: SafeUser;
		origin: Country;
		species: Species;
		breed: Breed;
	});
	currentUser: SafeUser | null;
	vaccines: Array<Vaccine>;
}

const PetClient: React.FC<PetClientProps> = ({ pet, currentUser, vaccines }) => {

	return (
		<Container>
			<div className="max-w-screen-lg mx-auto my-10">
				<div className="flex flex-col gap-4">
					<PetHead id={pet.id} pet={pet} currentUser={currentUser} />
					
					<div className="grid grid-cols-2 gap-8 mt-6">
						<div>
							<PetInfo pet={pet} vaccines={vaccines}/>
						</div>
						<div>
							<AppointmentBox pet={pet}/>
						</div>
					</div>

					<div className='flex flex-col gap-6'>
						<ListerInfo lister={pet.lister} />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PetClient;