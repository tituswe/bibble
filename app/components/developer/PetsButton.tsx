import { Breed, Country, Species } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from './Button';
import { createPetsData } from './data';

interface IPetsParams {
	users: Array<any>;
	species: Species[];
	breeds: Breed[];
	countries: Country[];
}

const PetsButton = (params: IPetsParams) => {
	const { users, species, breeds, countries } = params;
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		axios
			.post('/api/developer/pets', createPetsData(breeds, countries, users))
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
