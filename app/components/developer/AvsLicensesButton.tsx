import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from './Button';

const AvsLicensesButton = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
		axios
			.post('/api/developer/avsLicenses')
			.then(() => {
				toast.success('AvsLicenses posted successfully!');
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
				label="Dump AvsLicenses"
				onClick={() => onSubmit()}
				disabled={isLoading}
			/>
		</div>
	);
};

export default AvsLicensesButton;
