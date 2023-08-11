import { redirect } from 'next/navigation';
import { IPetsParams } from './actions/getPets';

interface HomeProps {
	searchParams: IPetsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
	redirect('/kennel/featured');
};

export default Home;
