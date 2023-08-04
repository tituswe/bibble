import ClientOnly from '../components/ClientOnly';

import PopularClient from './PopularClient';

const PopularPage = async () => {
	return (
		<ClientOnly>
			<PopularClient />
		</ClientOnly>
	);
};

export default PopularPage;
