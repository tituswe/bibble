import prisma from '@/app/libs/prismadb';

export default async function getPets() {
	try {
		const pets = await prisma.pet.findMany({
			orderBy: {
				postedAt: 'desc',
			},
		});

		return pets;
	} catch (error: any) {
		throw new Error(error);
	}
}
