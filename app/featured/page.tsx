import BrowsingPage from '../components/BrowsingPage';
import ClientOnly from '../components/ClientOnly';

import FeaturedClient from './FeaturedClient';

const FeaturedPage = async () => {
	return (
		<ClientOnly>
			<BrowsingPage>
				<FeaturedClient />
			</BrowsingPage>
		</ClientOnly>
	);
};

export default FeaturedPage;
