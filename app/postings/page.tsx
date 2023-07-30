import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';

import getCurrentUser from '../actions/getCurrentUser';
import getPets from '../actions/getPets';
import PostingsClient from './PostingsClient';

const PostingsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title="Unauthorized" subtitle="Please login" />
			</ClientOnly>
		);
	}

	const postings = await getPets({
		userId: currentUser.id,
	});

	if (postings.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title="No postings found"
					subtitle="Looks like you havent made any postings."
				/>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<PostingsClient postings={postings} currentUser={currentUser} />
		</ClientOnly>
	);
};

export default PostingsPage;
