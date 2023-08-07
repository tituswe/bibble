import BrowsingPage from '../components/BrowsingPage';
import ClientOnly from '../components/ClientOnly';

import RescueClient from './RescueClient';

const RescuePage = async () => {
	return (
		<ClientOnly>
			<BrowsingPage>
				<RescueClient />
			</BrowsingPage>
		</ClientOnly>
	);
};

export default RescuePage;
