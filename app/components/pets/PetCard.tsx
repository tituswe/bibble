'use client';

import getAge from '@/app/actions/getAge';
import { SafePet, SafeUser } from '@/app/types';
import { toCamelCase } from '@/app/utils/toCamelCase';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Button from '../Button';
import HeartButton from '../HeartButton';

interface PetCardProps {
	data: SafePet;
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
			<div className="flex flex-col gap-2 w-full">
				<div
					className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
				>
					<Image
						fill
						alt="Pet"
						src={data.imageSrc}
						className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
					/>
					<div className="absolute top-3 right-3">
						<HeartButton petId={data.id} currentUser={currentUser} />
					</div>
				</div>
				<div className="font-semibold text-lg">{data.name}</div>
				<div className="font-light text-neutral-500">
					{toCamelCase(data.gender)} | {data.breed} | {age} Years Old
				</div>
				<div className="flex flex-row items-center gap-1">
					<div className="font-semibold">$ {data.price} SGD</div>
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
	);
};

export default PetCard;
