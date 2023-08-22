'use client';

import getAgeLabel from '@/app/utils/getAgeLabel';

import { SafePet, SafeUser } from '@/app/types';
import { Breed, Country, Gender, Species } from '@prisma/client';

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
} from 'react-icons/bi';

import Avatar from '../Avatar';

interface PetInfoProps {
	pet: SafePet & {
		lister: SafeUser;
		origin: Country;
		species: Species;
		breed: Breed;
	};
}

const PetInfo: React.FC<PetInfoProps> = ({ pet }) => {
	const listDate = new Date(pet.postedAt);
	const birthDate = new Date(pet.birthday);

	const getDaysAgo = () => {
		return Math.floor(
			(new Date(Date.now()).getTime() - listDate.getTime()) /
				(1000 * 60 * 60 * 24)
		);
	};

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
							{/* TODO: Add check for verified account */}
							<BiBadgeCheck size={20} className="fill-sky-500" />
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
						{getAgeLabel({ data: pet })})
					</div>
				</div>

				{/* Description */}
				<div className='flex flex-col gap-6'>
					<div className='flex items-center gap-1'>
						<AiOutlineInfoCircle size={23} className='fill-neutral-300'/> <hr className='grow'/>
					</div>

					<div className='flex flex-col items-start gap-4'>
						<p className='font-semibold text-xl'>
							TODO: Add description field to DB
						</p>
						<p className='line-clamp-5 tracking-wide leading-relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et varius mauris, vitae gravida erat. 
							Suspendisse quis purus eu purus convallis mattis ac vel massa. Pellentesque hendrerit mattis pharetra. 
							Aliquam sodales a metus eu porttitor. Donec iaculis rhoncus tristique. Ut laoreet blandit euismod. Donec 
							sed cursus enim. Etiam laoreet eget eros a imperdiet. In eget venenatis mi, in sollicitudin neque.
							
							Aenean suscipit sodales nulla facilisis ultrices. Integer venenatis dolor at erat ullamcorper, quis bibendum 
							urna feugiat. Proin varius ipsum in eros tincidunt, et condimentum eros rhoncus. Nunc egestas eleifend fermentum. 
							Maecenas et eleifend ligula, sagittis tincidunt ligula. Phasellus ut interdum augue. Nullam pellentesque tortor 
							quis urna feugiat, eget lacinia purus consequat. Sed tempus enim libero, ultricies hendrerit neque pharetra ut. 
							Sed eu pretium odio. Nulla fringilla lacus a orci ullamcorper maximus. Vivamus vehicula lacinia placerat. Integer 
							egestas nisi in tincidunt venenatis.
							
							Aenean vehicula malesuada egestas. Sed fermentum mauris ac mauris interdum iaculis. Nulla at tempor nibh. Vestibulum 
							et leo ligula. Nam in mi sed velit aliquam laoreet quis consectetur lacus. Suspendisse at quam quam. Aenean rhoncus 
							ante quis lobortis vulputate. Morbi nec ex mi. Aenean in ipsum porta diam rhoncus lacinia et vitae justo. Nunc in risus 
							mauris. Fusce egestas lectus dolor, vel posuere nunc semper in. In turpis purus, placerat sed est sit amet, iaculis 
							pretium magna. Fusce non porttitor augue.
							
							Aliquam accumsan elit nec neque vestibulum hendrerit. Proin cursus nisi nulla, ut finibus turpis imperdiet vitae. Proin 
							ac turpis in felis interdum scelerisque eget vitae metus. Nullam ac augue dapibus, iaculis arcu sit amet, facilisis eros. 
							Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer maximus tortor risus, at 
							egestas ligula dignissim quis. Phasellus egestas justo vel dictum sollicitudin. Vestibulum tempor nisl ac felis rutrum, eget 
							congue sapien consequat. Vivamus rutrum sed nibh ac pellentesque. Vestibulum commodo nisl quis tortor venenatis, at finibus 
							ipsum ultricies. Morbi ligula quam, hendrerit ut feugiat nec, pretium non nisl. Donec et quam tortor. Maecenas bibendum, 
							turpis nec imperdiet blandit, nisl ante dignissim metus, ut egestas ex purus quis quam. Morbi eget leo augue.
							
							Aliquam rutrum est a nibh ultrices, ac eleifend augue mattis. Suspendisse potenti. Proin faucibus porttitor dictum. Suspendisse 
							potenti. In ut erat non ex pellentesque pharetra. Cras gravida ipsum velit, non semper neque lacinia et. In blandit fermentum urna. 
							Nulla ut ex lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin molestie 
							posuere orci id condimentum. Aliquam aliquet ligula eu blandit tincidunt. Aliquam et cursus orci. Quisque in congue nibh. Cras 
							at lectus consequat, facilisis lectus a, facilisis odio.
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
						{false ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						Vaccinated (MISSING FIELD IN DB)
					</div>

					<div className="flex items-center gap-4">
						{false ? (
							<BiCheck size={18} className="fill-neutral-700" />
						) : (
							<BiX size={18} className="fill-neutral-700" />
						)}
						Mircrochipped (MISSING FIELD IN DB)
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
