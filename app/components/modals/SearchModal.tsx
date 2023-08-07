'use client';

import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback, useState } from 'react';
import { Range } from 'react-date-range';

import useSearchModal from '@/app/hooks/useSearchModal';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';
import Heading from '../Heading';
import GenderInput from '../inputs/GenderInput';
import Modal from './Modal';

const SearchModal = () => {
	const router = useRouter();
	const params = useSearchParams();
	const searchModal = useSearchModal();

	const [gender, setGender] = useState('');
	const [breed, setBreed] = useState('');
	const [ageRange, setAgeRange] = useState<Range>({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	});

	const onSet = useCallback(
		(input: string, curr: string, setFn: (value: string) => void) => {
			if (input == curr) {
				input == '';
			}

			setFn(input);
		},
		[]
	);

	const onSubmit = useCallback(async () => {
		let currentQuery = {};

		if (params) {
			currentQuery = qs.parse(params.toString());
		}

		const updatedQuery: any = {
			...currentQuery,
			gender,
			breed,
		};

		if (ageRange.startDate) {
			updatedQuery.startDate = formatISO(ageRange.startDate);
		}

		if (ageRange.endDate) {
			updatedQuery.endDate = formatISO(ageRange.endDate);
		}

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery,
			},
			{ skipNull: true }
		);

		searchModal.onClose();
		router.push(url);
	}, [breed, gender, ageRange, searchModal, router, params]);

	const bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading
				title="What kind of friend are you looking for?"
				subtitle="Find them here!"
			/>
			<div>IMPLEMENT BREED SELECT</div>
			<div className="flex flex-row justify-between gap-3">
				<GenderInput
					onClick={() => onSet('male', gender, setGender)}
					selected={gender === 'male'}
					label={'male'}
					icon={BiMaleSign}
				/>
				<GenderInput
					onClick={() => onSet('female', gender, setGender)}
					selected={gender === 'female'}
					label={'female'}
					icon={BiFemaleSign}
				/>
			</div>
			<div>IMPLEMENT AGE RANGE SELECT</div>
			<div>IMPLEMENT POSTED RANGE SELECT</div>
		</div>
	);

	return (
		<Modal
			isOpen={searchModal.isOpen}
			onClose={searchModal.onClose}
			onSubmit={onSubmit}
			title="Filters"
			actionLabel="Search"
			body={bodyContent}
		/>
	);
};

export default SearchModal;
