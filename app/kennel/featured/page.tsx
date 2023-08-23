import KennelClient from '@/app/KennelClient';

import FeaturedClient from './FeaturedClient';

const FeaturedPage = async () => {
	return (
		<KennelClient>
			<FeaturedClient />
		</KennelClient>
	);
};

export default FeaturedPage;
