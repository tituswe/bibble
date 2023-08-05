import prisma from '@/app/libs/prismadb';

export default async function getCountries() {
	try {
		const countries = await prisma.country.findMany();

		return countries;
	} catch (error: any) {
		throw new Error(error);
	}
}
