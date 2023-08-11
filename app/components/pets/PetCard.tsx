'use client';

import { SafePet, SafeUser } from '@/app/types';
import getAgeLabel from '@/app/utils/getAgeLabel';
import { Breed, Country, Gender, Species } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import {
	BiFemaleSign,
	BiGlobe,
	BiHourglass,
	BiMaleSign,
	BiRuler,
} from 'react-icons/bi';
import { LuVerified } from 'react-icons/lu';
import Avatar from '../Avatar';
import Button from '../Button';
import HeartButton from '../HeartButton';

interface PetCardProps {
	data: SafePet & {
		lister: SafeUser;
		origin: Country;
		species: Species;
		breed: Breed;
	};
	onAction?: (id: string) => void;
	disabled?: boolean;
	actionLabel?: string;
	actionId?: string;
	currentUser?: SafeUser | null;
}

const PetCard: React.FC<PetCardProps> = ({
	data,
	onAction,
	disabled,
	actionLabel,
	actionId = '',
	currentUser,
}) => {
	const router = useRouter();
	const age = getAgeLabel({ data });

	const handleCancel = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();

			if (disabled) {
				return;
			}

			onAction?.(actionId);
		},
		[onAction, actionId, disabled]
	);

	return (
		<div
			onClick={() => router.push(`/pets/${data.id}`)}
			className="
	    col-span-1 cursor-pointer group
	  "
		>
			<div className="flex flex-col gap-2 w-full">
				<div
					className="
						aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-3xl
						transition
						scale-100
						hover:shadow-xl
						hover:-translate-y-2
						z-10
	       	"
				>
					<Image
						fill
						alt="Pet"
						src={data.images[0]}
						className="
							object-cover 
							h-full 
							w-full 
							transition
						"
					/>
					<div className="absolute top-3 right-3">
						<HeartButton petId={data.id} currentUser={currentUser} />
					</div>
				</div>
				<div
					className="
						flex 
						flex-col 
						border-[1px] 
						px-4 
						rounded-3xl
					"
				>
					<div
						className="
							flex 
							flex-row 
							justify-end 
							h-0 
							w-full
							translate-x-6
							-translate-y-1
						"
					>
						<div
							className="
								flex 
								items-center 
								justify-center 
								bg-white 
								rounded-full 
								p-2
							"
						>
							{data.gender == Gender.MALE ? (
								<BiMaleSign className="text-sky-500" />
							) : (
								<BiFemaleSign className="text-rose-500" />
							)}
						</div>
					</div>
					<div className="flex flex-col items-center gap-3 py-4">
						<div className="font-semibold text-md overflow-clip h-[24px]">
							{data.breed.name}
						</div>

						<div
							className="
								flex
								flex-col
								justify-center	
								font-light 
								text-sm
							 text-neutral-500 
								overflow-clip 
								h-auto
								w-full
								gap-1
							"
						>
							<div className="flex flex-row items-center gap-2">
								<BiGlobe />
								{data.origin.name}
							</div>
							<div className="flex flex-row items-center gap-2">
								<BiHourglass />
								{age} Old
							</div>
							<div className="flex flex-row items-center gap-2">
								<BiRuler />
								TO IMPLEMENT
							</div>
						</div>
					</div>
					<hr className="mx-4" />
					<div
						className="
							flex 
							flex-row 
							justify-between 
							items-center 
							text-sm 
							py-4 
							gap-1
						"
					>
						<div className="flex flex-row items-center gap-1">
							<Avatar small src={data.lister?.image} />
							<div className="pl-1">{data.lister?.name}</div>
							<LuVerified className="text-sky-500" />
						</div>
						<div className="font-light text-neutral-500">$ {data.price}</div>
					</div>
				</div>
				{onAction && actionLabel && (
					<Button
						disabled={disabled}
						small
						label={actionLabel}
						onClick={handleCancel}
					/>
				)}
			</div>
			{/* <div className="relative gap-2 w-full">
				<div className="flex justify-center">
					<div
						className="
							aspect-square
							w-5/6
							absolute
							overflow-hidden
							rounded-3xl
							z-10
							shadow-lg
							hover:drop-shadow-lg
							hover:scale-110
							transition
	       		"
					>
						<Image
							fill
							alt="Pet"
							src={data.images[0]}
							className="
							object-cover
							h-5/6
							w-5/6
							transition
							"
						/>
						<div className="absolute top-3 right-3">
							<HeartButton petId={data.id} currentUser={currentUser} />
						</div>
					</div>
				</div>

				<div className="flex flex-col pt-24">
					<div className="relative aspect-square rounded-3xl border-[1px] z-0 shadow-md">
						<div className="absolute inset-0 flex items-end p-4">
							<div className="flex flex-col w-full">
								<div className="flex flex-row justify-between items-center gap-2">
									<div className="font-semibold text-md">{data.breed.name}</div>
									{data.gender == Gender.MALE ? (
										<BiMaleSign className="text-xl" />
									) : (
										<BiFemaleSign className="text-xl" />
									)}
								</div>
								<div className="flex flex-row justify-between text-sky-500 text-sm pb-4 pt-1">
									<div className="flex flex-row gap-2">
										<div>{data.origin.name}</div>
										<div>|</div>
										<div>{age} Old</div>
									</div>
								</div>
								<hr />
								<div className="flex flex-row justify-between items-center pt-4 text-neutral-500 text-sm">
									<div className="flex flex-row items-center gap-1">
										<Avatar small src={data.lister?.image} />
										<div className="pl-1">{data.lister?.name}</div>
										<LuVerified className="text-sky-500" />
									</div>
									<div>${data.price}</div>
								</div>
								{onAction && actionLabel && (
									<Button
										disabled={disabled}
										small
										label={actionLabel}
										onClick={handleCancel}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default PetCard;
