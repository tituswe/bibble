import ClientOnly from '../components/ClientOnly';

import FeaturedClient from './FeaturedClient';

const FeaturedPage = async () => {
	return (
		<ClientOnly>
			<FeaturedClient />
		</ClientOnly>
	);
};

export default FeaturedPage;
