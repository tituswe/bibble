import prisma from '@/app/libs/prismadb';
import { Vaccine } from '@prisma/client';

export default async function getVaccines() {
	try {
		const vaccines = await prisma.vaccine.findMany();
		const duplicates: Set<string> = new Set();
		const uniqueVaccines: Array<Vaccine> = [];

		for (const item of vaccines) {
			if (!duplicates.has(item.name)) {
				uniqueVaccines.push(item);
				duplicates.add(item.name);
			}
		}

		return uniqueVaccines;
	} catch (error: any) {
		throw new Error(error);
	}
}
