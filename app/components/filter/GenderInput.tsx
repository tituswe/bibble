'use client';

import { Gender } from '@prisma/client';
import { useCallback, useState } from 'react';
import { BiMaleSign } from 'react-icons/bi';
import Box from '../Box';

const GenderInput = () => {
	const [selected, setSelected] = useState<Gender>();
	const genders = [Gender.MALE, Gender.FEMALE];

	const onClick = useCallback((e: Gender) => {
		setSelected(e);
	}, []);

	return (
		<div
			className="
				flex
				flex-col
				gap-6
			"
		>
			<div className="font-semibold text-2xl">Gender</div>
			<div
				className="
				flex
				flex-row
				justify-center
			"
			>
				<div
					className="
						flex
						justify-center
						w-full
						p-4
						cursor-pointer
						hover:shadow-inner
						hover:bg-neutral-200
						border-[1px]
						rounded-l-3xl
						transition
					"
				>
					<Box
						key={0}
						label={'male'}
						icon={BiMaleSign}
						selected={selected === Gender.MALE}
						onClick={() => onClick(Gender.MALE)}
					/>
				</div>
				<div
					className="
						flex
						justify-center
						w-full
						p-4
						cursor-pointer
						hover:shadow-inner
						hover:bg-neutral-200
						border-[1px]
						rounded-r-3xl
						transition
					"
				>
					<Box
						key={1}
						label={'female'}
						icon={BiMaleSign}
						selected={selected === Gender.FEMALE}
						onClick={() => onClick(Gender.FEMALE)}
					/>
				</div>
			</div>
		</div>
	);
};
export default GenderInput;
