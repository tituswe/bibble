import prisma from '@/app/libs/prismadb';

export default async function getBreeds() {
	try {
		const breeds = await prisma.breed.findMany();

		return breeds;
	} catch (error: any) {
		throw new Error(error);
	}
}
