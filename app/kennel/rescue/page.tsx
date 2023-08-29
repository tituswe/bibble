import KennelClient from '@/app/kennel/KennelClient';

import RescueClient from './RescueClient';

const RescuePage = async () => {
	return (
		<KennelClient>
			<RescueClient />
		</KennelClient>
	);
};

export default RescuePage;
