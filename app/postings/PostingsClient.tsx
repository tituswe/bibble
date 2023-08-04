'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { useCallback, useState } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import PetCard from '../components/pets/PetCard';
import { SafePet, SafeUser } from '../types';

interface PostingsClientProps {
	postings: SafePet[];
	currentUser?: SafeUser | null;
}

const PostingsClient: React.FC<PostingsClientProps> = ({
	postings,
	currentUser,
}) => {
	const router = useRouter();
	const [deletingId, setDeletingId] = useState('');

	const onDelete = useCallback(
		(id: string) => {
			setDeletingId(id);

			axios
				.delete(`/api/pets/${id}`)
				.then(() => {
					toast.success('Posting deleted');
					router.refresh();
				})
				.catch((error) => {
					toast.error(error?.response?.data?.error);
				})
				.finally(() => {
					setDeletingId('');
				});
		},
		[router]
	);

	return (
		<Container>
			<Heading title="Postings" subtitle="List of your postings" />
			<div
				className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
			>
				{postings.map((posting: any) => (
					<PetCard
						key={posting.id}
						data={posting}
						actionId={posting.id}
						onAction={onDelete}
						disabled={deletingId === posting.id}
						actionLabel="Delete posting"
						currentUser={currentUser}
					/>
				))}
			</div>
		</Container>
	);
};

export default PostingsClient;
