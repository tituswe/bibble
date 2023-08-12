import prisma from '@/app/libs/prismadb';

export default async function getVaccines() {
	try {
		const vaccines = await prisma.vaccine.groupBy({
			by: ['name'],
			_count: {
				name: true,
			},
		});

		return vaccines;
	} catch (error: any) {
		throw new Error(error);
	}
}
