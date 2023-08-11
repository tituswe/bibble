import ClientOnly from '../components/ClientOnly';
import KennelWrapper from '../wrappers/KennelWrapper';

import RescueClient from './RescueClient';

const RescuePage = async () => {
	return (
		<ClientOnly>
			<KennelWrapper>
				<RescueClient />
			</KennelWrapper>
		</ClientOnly>
	);
};

export default RescuePage;
