'use client';

import getAgeLabel from '@/app/utils/getAge';

import { SafePet, SafeUser } from '@/app/types';
import { Breed, Country, Gender, Species, Vaccine } from '@prisma/client';

import {
	AiOutlineAudit,
	AiOutlineInfoCircle,
	AiOutlineMedicineBox,
	AiOutlineQuestionCircle,
} from 'react-icons/ai';

import {
	BiBadgeCheck,
	BiBone,
	BiCalendar,
	BiCheck,
	BiFemaleSign,
	BiMaleSign,
	BiX,
	BiInjection
} from 'react-icons/bi';

import Avatar from '../Avatar';

interface PetInfoProps {
	pet: SafePet & {
		lister: SafeUser;
		origin: Country;
		species: Species;
		breed: Breed;
	};
	vaccines: Array<Vaccine>
}

const PetInfo: React.FC<PetInfoProps> = ({ pet, vaccines }) => {
	const listDate = new Date(pet.postedAt);
	const birthDate = new Date(pet.birthday);

	const getDaysAgo = () => {
		return Math.floor(
			(new Date(Date.now()).getTime() - listDate.getTime()) /
				(1000 * 60 * 60 * 24)
		);
	};

	const getVaccineName = (id: string) => {
		return vaccines.filter(vaccine => vaccine.id === id).map(vaccine => vaccine.name);
	}

	return (
		<>
			<div className="col-span-4 flex flex-col gap-6">
				{/* Listing Information Header */}
				<div className="flex flex-col gap-2">
					<div className="text-xl font-semibold flex flex-row justify-between gap-2">
						<div className="flex place-items-center">
							<p className="pr-1">
								Posted by {pet.lister.name ? pet.lister.name : 'NO LISTER NAME'}
							</p>
							{pet.lister.profile.verified && (<BiBadgeCheck size={20} className="fill-sky-500" />)}
						</div>
						<Avatar src={pet.lister.image} />
					</div>
					<div className="font-light text-neutral-500">
						Listed on{' '}
						{listDate.toLocaleDateString('en-GB', { timeZone: 'SST' })} (
						{getDaysAgo()} days ago)
					</div>
				</div>

				{/* Basic Information */}
				<div className='flex flex-col gap-6'>
					<div className='flex items-center gap-1'>
						<AiOutlineQuestionCircle size={23} className='fill-neutral-300'/> <hr className='grow'/>
					</div>

					<div className="flex items-center gap-4">
						{pet.gender == Gender.MALE ? (
							<BiMaleSign size={18} className="fill-neutral-700" />
						) : (
							<BiFemaleSign size={18} className="fill-neutral-700" />
						)}
						{pet.gender.charAt(0).toUpperCase()}
						{pet.gender.slice(1).toLowerCase()}
					</div>

					<div className="flex items-center gap-4">
						<BiBone size={18} className="fill-neutral-700" />
						{pet.breed.name}
					</div>

					<div className="flex items-center gap-4">
						<BiCalendar size={18} className="fill-neutral-700" />
						{birthDate.toLocaleDateString('en-GB', { timeZone: 'SST' })} (
						{getAgeLabel({ data: pet })} Old)
					</div>
				</div>

				{/* Description */}
				<div className='flex flex-col gap-6'>
					<div className='flex items-center gap-1'>
						<AiOutlineInfoCircle size={23} className='fill-neutral-300'/> <hr className='grow'/>
					</div>

					<div className='flex flex-col items-start gap-4'>
						<p className='font-semibold text-xl'>
							More about me
						</p>
						<p className='line-clamp-6 tracking-wide leading-relaxed'>
							{pet.description}
						</p>

						<button className='font-semibold underline' onClick={() => {}}>
							Read More... (TODO: Implement Description Modal)
						</button>
					</div>
				</div>

				{/* Medical Information */}
				<div className='flex flex-col gap-6'>
					<div className='flex items-center gap-1'>
						<AiOutlineMedicineBox size={23} className='fill-neutral-300'/> <hr className='grow'/>
					</div>

					<div className="flex items-center gap-4">
						{pet.vaccineIds.length > 0 ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						Vaccinated
					</div>

					{(pet.vaccineIds.map((id, index) => {
						return (
							<div className='ml-8 flex flex-cols gap-2 items-center' key={index}>
								<BiInjection size={18} className="fill-neutral-700" />
								{getVaccineName(id)}
							</div>
						)
					}))}

					<div className="flex items-center gap-4">
						{pet.isMicrochipped ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						Mircrochipped
					</div>

					<div className="flex items-center gap-4">
						{pet.isNeutered ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						Neutered
					</div>
				</div>

				{/* Legal Information */}
				<div className='flex flex-col gap-6'>
					<div className='flex items-center gap-1'>
						<AiOutlineAudit size={23} className='fill-neutral-300'/> <hr className='grow'/>
					</div>

					<div className="flex items-center gap-4">
						{pet.isHdbApproved ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						HDB Approved
					</div>

					<div className="flex items-center gap-4">
						{pet.isHealthTested ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						AVS License
					</div>

					<div className="flex items-center gap-4">
						{pet.isHealthTested ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						Health Tested
					</div>
				</div>
			</div>
		</>
	);
};

export default PetInfo;
