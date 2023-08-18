import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { speciesData } from '../data';
import Button from './Button';

const BreedsButton = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		axios
			.post('/api/developer/species', speciesData)
			.then(() => {
				toast.success('Species posted successfully!');
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
				label="Dump Species"
				onClick={() => onSubmit()}
				disabled={isLoading}
			/>
		</div>
	);
};

export default BreedsButton;
