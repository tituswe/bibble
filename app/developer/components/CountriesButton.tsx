import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { countriesData } from '../data';
import Button from './Button';

const CountriesButton = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		axios
			.post('/api/developer/countries', countriesData)
			.then(() => {
				toast.success('Countries posted successfully!');
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
				label="Dump Countries"
				onClick={() => onSubmit()}
				disabled={isLoading}
			/>
		</div>
	);
};

export default CountriesButton;
