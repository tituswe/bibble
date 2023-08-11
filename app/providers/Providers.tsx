'use client';

import ModalProvider from './ModalProvider';
import ToasterProvider from './ToasterProvider';

interface ProvidersProps {
	children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<>
			<ToasterProvider />
			{children}
			<ModalProvider />
		</>
	);
};

export default Providers;
