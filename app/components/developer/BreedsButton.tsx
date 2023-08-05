import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from './Button';
import { breedsData } from './data';

const BreedsButton = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		axios
			.post('/api/developer/breeds', breedsData)
			.then(() => {
				toast.success('Breeds posted successfully!');
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
				label="Dump Breeds"
				onClick={() => onSubmit()}
				disabled={isLoading}
			/>
		</div>
	);
};

export default BreedsButton;
