import { Breed, Country, Species, Vaccine } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { createPetsData } from '../data';
import Button from './Button';

interface IPetsParams {
	users: Array<any>;
	species: Species[];
	breeds: Breed[];
	countries: Country[];
	vaccines: Vaccine[];
}

const PetsButton = (params: IPetsParams) => {
	const { users, species, breeds, countries, vaccines } = params;
	const dog = species.find((item) => item.name === 'dog');
	const vaccineIds = vaccines.map((item) => item.id);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		axios
			.post(
				'/api/developer/pets',
				createPetsData(dog!, breeds, countries, users, vaccineIds)
			)
			.then(() => {
				toast.success('Pets posted successfully!');
				router.refresh();
			})
			.catch(() => {
				toast.error('Something went wrong!');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div>
			<Button
				label="Dump Pets"
				onClick={() => onSubmit()}
				disabled={isLoading}
			/>
		</div>
	);
};

export default PetsButton;
