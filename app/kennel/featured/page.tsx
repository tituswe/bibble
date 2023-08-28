import KennelClient from '@/app/kennel/KennelClient';

import FeaturedClient from './FeaturedClient';

const FeaturedPage = async () => {
	return (
		<KennelClient>
			<FeaturedClient />
		</KennelClient>
	);
};

export default FeaturedPage;
