import prisma from '@/app/libs/prismadb';

import getCurrentUser from './getCurrentUser';

export default async function getFavoritePets() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return [];
		}

		const pets = await prisma.pet.findMany({
			where: {
				id: {
					in: [...(currentUser.favoriteIds || [])],
				},
			},
			include: {
				species: true,
				breed: true,
				origin: true,
				lister: true,
				vaccines: true,
				avsLicense: true,
			},
		});

		const safeFavorites = pets.map((pet) => ({
			...pet,
			postedAt: pet.postedAt.toISOString(),
			birthday: pet.birthday.toISOString(),
			lister: {
				...pet.lister,
				createdAt: pet.lister.createdAt.toISOString(),
				updatedAt: pet.lister.updatedAt.toISOString(),
				emailVerified: pet.lister.emailVerified?.toISOString() || null,
			},
		}));

		return safeFavorites;
	} catch (error: any) {
		throw new Error(error);
	}
}
