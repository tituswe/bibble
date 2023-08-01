'use client';

import Image from 'next/image';

interface RescueClientProps {}

const RescueClient: React.FC<RescueClientProps> = ({}) => {
	return (
		<div>
			<Image alt="Coming Soon!" fill={true} src="/images/rescue.jpeg" />
		</div>
	);
};

export default RescueClient;
