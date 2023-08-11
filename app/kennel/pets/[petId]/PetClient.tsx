'use client';

import { useMemo } from 'react';

import { AiOutlineUser } from 'react-icons/ai';

import AppointmentBox from '@/app/components/AppointmentBox';
import Container from '@/app/components/Container';
import { Breed, breeds } from '@/app/components/navbar/Breeds';
import PetHead from '@/app/components/pets/PetHead';
import PetInfo from '@/app/components/pets/PetInfo';

import Avatar from '@/app/components/Avatar';
import GeoCard from '@/app/components/GeoCard';
import { SafePet, SafeUser } from '@/app/types';
import { Breed as BreedSchema, Country, Species } from '@prisma/client';
import { BiBadgeCheck } from 'react-icons/bi';

interface PetClientProps {
	pet: SafePet & {
		lister: SafeUser;
		origin: Country;
		species: Species;
		breed: BreedSchema;
	};
	currentUser: SafeUser | null;
}

const PetClient: React.FC<PetClientProps> = ({ pet, currentUser }) => {
	const breed: Breed | undefined = useMemo(() => {
		return breeds.find((item) => item.label === pet.breed.name);
	}, [pet.breed.name]);

	const getDateJoined = () => {
		let dateJoined = new Date(pet.lister.createdAt);
		let monthsDict = {
			Jan: 1,
			Feb: 2,
			Mar: 3,
			Apr: 4,
			May: 5,
			Jun: 6,
			Jul: 7,
			Aug: 8,
			Sep: 9,
			Oct: 10,
			Nov: 11,
			Dec: 12,
		};
		var month = 'MONTH';
		Object.entries(monthsDict).forEach((entry) => {
			let monthName = entry[0];
			let monthIndex = entry[1];
			if (dateJoined.getMonth() == monthIndex) {
				month = monthName;
			}
		});

		return `${month} ${dateJoined.getFullYear()}`;
	};

	return (
		<Container>
			<div className="max-w-screen-lg mx-auto">
				<div className="flex flex-col gap-2">
					<PetHead id={pet.id} pet={pet} currentUser={currentUser} />

					<div className="grid grid-cols-2 gap-8 mt-6">
						<div>
							<PetInfo pet={pet} />
						</div>
						<div>
							<AppointmentBox pet={pet} />
						</div>
					</div>

					{/* Lister Info */}
					<div className="flex flex-col gap-2">
						{/* Divider */}
						<div className="flex items-center gap-1">
							<AiOutlineUser size={23} className="fill-neutral-300" />{' '}
							<hr className="grow" />
						</div>

						<div className="grid grid-cols-2 gap-8">
							{/* Left Column */}
							<div className="flex flex-col gap-4">
								{/* Lister Banner */}
								<div className="flex flex-rows items-center gap-4">
									<div className="ml-1 aspect-square">
										<Avatar src={pet.lister.image} large />
									</div>
									<div className="grid grid-rows-2 gap-0">
										<div className="flex items-center gap-1">
											<p className="text-2xl font-bold">
												{pet.lister.name ? pet.lister.name : 'NO LISTER NAME'}
											</p>
											{/* TODO: Add check for verified account */}
											<BiBadgeCheck size={22} className="fill-sky-500" />
										</div>

										<p>Joined in {getDateJoined()}</p>
									</div>
								</div>

								{/* Lister Description */}
								<div className="">
									Might want to look to add a review system
								</div>
							</div>

							{/* Right Column */}
							{/* TODO: ADD LISTER ADDRESS FIELD TO DB */}
							<GeoCard location={'96 Joo Chiat Terrace Singapore 427253'} />
						</div>
					</div>

					<div className="w-full h-96">fdsjlaf</div>
				</div>
			</div>
		</Container>
	);
};

export default PetClient;
