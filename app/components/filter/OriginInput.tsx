'use client';

import { Country } from '@prisma/client';

interface OriginInputProps {
	origins: Country[];
}

const OriginInput: React.FC<OriginInputProps> = ({ origins }) => {
	return (
		<div>
			<div>Origin</div>
		</div>
	);
};
export default OriginInput;
