'use client';

import getAge from '@/app/actions/getAge';
import { SafePet, SafeUser } from '@/app/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';
import { LuVerified } from 'react-icons/lu';
import Avatar from '../Avatar';
import Button from '../Button';
import HeartButton from '../HeartButton';

interface PetCardProps {
	data: SafePet & {
		user: SafeUser;
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
	const age = getAge({ data });

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
			<div className="relative gap-2 w-full">
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
							src={data.imageSrc}
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
							<div className="flex flex-col w-full px-2">
								<div className="flex flex-row items-center gap-2">
									<div className="font-semibold text-lg">{data.breed}</div>
									{data.gender == 'male' ? (
										<BiMaleSign className="text-xl" />
									) : (
										<BiFemaleSign className="text-xl" />
									)}
								</div>
								<div className="flex flex-row justify-between text-sky-500 text-sm pb-4 pt-1">
									<div>Perth, Australia</div>
									<div>{age}</div>
								</div>
								<hr />
								<div className="flex flex-row justify-between items-center pt-4 text-neutral-500 text-sm">
									<div className="flex flex-row items-center gap-1">
										<Avatar small src={data.user?.image} />
										<div className="pl-1">{data.user?.name}</div>
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
			</div>
		</div>
	);
};

export default PetCard;
