import ClientOnly from '../components/ClientOnly';

import MessagesClient from './MessagesClient';

const MessagesPage = async () => {
	return (
		<ClientOnly>
			<MessagesClient />
		</ClientOnly>
	);
};

export default MessagesPage;
