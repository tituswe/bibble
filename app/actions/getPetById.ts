import prisma from '@/app/libs/prismadb';

interface IParams {
	petId?: string;
}

export default async function getPetById(params: IParams) {
	try {
		const { petId } = params;

		const pet = await prisma.pet.findUnique({
			where: {
				id: petId,
			},
			include: {
				user: true,
			},
		});

		if (!pet) {
			return null;
		}

		return {
			...pet,
			postedAt: pet.postedAt.toISOString(),
			birthday: pet.birthday.toISOString(),
			user: {
				...pet.user,
				createdAt: pet.user.createdAt.toISOString(),
				updatedAt: pet.user.updatedAt.toISOString(),
				emailVerified: pet.user.emailVerified?.toISOString() || null,
			},
		};
	} catch (error: any) {
		throw new Error(error);
	}
}
