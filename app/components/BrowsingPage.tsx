'use client';

import Pages from './navbar/Pages';

interface BrowsingPageProps {
	children: React.ReactNode;
}

const BrowsingPage: React.FC<BrowsingPageProps> = ({ children }) => {
	return (
		<div>
			<div className="sticky">
				<div className="flex flex-row justify-center pt-2">
					<Pages />
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default BrowsingPage;
