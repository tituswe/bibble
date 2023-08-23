import { IPetsParams } from '@/app/actions/getPets';
import { redirect } from 'next/navigation';

interface KennelProps {
	searchParams: IPetsParams;
}

const Kennel = async ({ searchParams }: KennelProps) => {
	redirect('/kennel/explore');
};

export default Kennel;
