import ClientOnly from '../components/ClientOnly';
import KennelWrapper from '../wrappers/KennelWrapper';

import FeaturedClient from './FeaturedClient';

const FeaturedPage = async () => {
	return (
		<ClientOnly>
			<KennelWrapper>
				<FeaturedClient />
			</KennelWrapper>
		</ClientOnly>
	);
};

export default FeaturedPage;
