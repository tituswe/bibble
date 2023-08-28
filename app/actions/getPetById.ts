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
				species: true,
				breed: true,
				origin: true,
				lister: {
					include: {
						profile: true
					}
				},
				avsLicense: true,
			},
		});

		if (!pet) {
			return null;
		}

		return {
			...pet,
			postedAt: pet.postedAt.toISOString(),
			birthday: pet.birthday.toISOString(),
			lister: {
				...pet.lister,
				createdAt: pet.lister.createdAt.toISOString(),
				updatedAt: pet.lister.updatedAt.toISOString(),
				emailVerified: pet.lister.emailVerified?.toISOString() || null,
			},
		};
	} catch (error: any) {
		throw new Error(error);
	}
}
