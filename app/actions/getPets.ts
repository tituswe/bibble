import prisma from '@/app/libs/prismadb';

export default async function getPets() {
	try {
		const pets = await prisma.pet.findMany({
			orderBy: {
				postedAt: 'desc',
			},
		});

		const safePets = pets.map((pet) => ({
			...pet,
			birthday: pet.birthday.toISOString(),
			postedAt: pet.postedAt.toISOString(),
		}));

		return safePets;
	} catch (error: any) {
		throw new Error(error);
	}
}
