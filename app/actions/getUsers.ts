import prisma from '@/app/libs/prismadb';
import { convertToSafeUser } from './convertToDateSafe';

export default async function getUsers() {
	try {
		const users = await prisma.user.findMany();
		
		return users.map((user) => convertToSafeUser(user));
	} catch (error: any) {
		throw new Error(error);
	}
}
