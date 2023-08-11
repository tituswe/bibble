import getCurrentUser from '../actions/getCurrentUser';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

interface BibbleWrapperProps {
	children: React.ReactNode;
}

const BibbleWrapper: React.FC<BibbleWrapperProps> = async ({ children }) => {
	const currentUser = await getCurrentUser();

	return (
		<div className="flex flex-col gap-4">
			<Navbar currentUser={currentUser} />
			<div className="h-full pt-20">{children}</div>
			<Footer />
		</div>
	);
};

export default BibbleWrapper;
