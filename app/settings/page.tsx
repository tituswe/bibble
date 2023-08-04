import ClientOnly from '../components/ClientOnly';

import SettingsClient from './SettingsClient';

const SettingsPage = async () => {
	return (
		<ClientOnly>
			<SettingsClient />
		</ClientOnly>
	);
};

export default SettingsPage;
