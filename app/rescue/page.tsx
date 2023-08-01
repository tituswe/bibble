import ClientOnly from '../components/ClientOnly';

import RescueClient from './RescueClient';

const RescuePage = async () => {
	return (
		<ClientOnly>
			<RescueClient />
		</ClientOnly>
	);
};

export default RescuePage;
