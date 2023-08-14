import prisma from '@/app/libs/prismadb';
import {
	Breed,
	Country,
	Gender,
	SaleType,
	Species,
	Vaccine,
} from '@prisma/client';
import { formatISO } from 'date-fns';
import { TimeUnit } from '../types';
import getBirthdate from '../utils/getBirthdate';

export interface IPetsParams {
	userId?: string;
	saleType?: SaleType;
	speciesIds?: Array<Pick<Species, 'id'>>;
	breedIds?: Array<Pick<Breed, 'id'>>;
	minPrice?: number;
	maxPrice?: number;
	minAge?: number;
	maxAge?: number;
	timeUnit?: TimeUnit;
	gender?: Gender;
	originIds?: Array<Pick<Country, 'id'>>;
	vaccineIds?: Array<Pick<Vaccine, 'id'>>;
	options?: Array<string>;
}

export default async function getPets(params: IPetsParams) {
	try {
		let {
			userId,
			saleType,
			speciesIds,
			breedIds,
			minPrice,
			maxPrice,
			minAge,
			maxAge,
			timeUnit,
			gender,
			originIds,
			vaccineIds,
			options,
		} = params;

		let query: any = {};

		if (userId) {
			query.userId = userId;
		}

		if (saleType) {
			query.saleType = saleType;
		}

		if (speciesIds) {
			if (typeof speciesIds === 'string') {
				speciesIds = [speciesIds];
			}

			query.species = {
				id: { in: speciesIds },
			};
		}

		if (breedIds) {
			if (typeof breedIds === 'string') {
				breedIds = [breedIds];
			}

			query.breed = {
				id: { in: breedIds },
			};
		}

		if (minPrice && maxPrice) {
			if (typeof minPrice === 'string') {
				minPrice = parseInt(minPrice);
			}

			if (typeof maxPrice === 'string') {
				maxPrice = parseInt(maxPrice);
			}

			query.AND = [
				{
					price: { gte: minPrice },
				},
				{
					price: { lte: maxPrice },
				},
			];
		}

		if (minAge && maxAge && timeUnit) {
			if (typeof minAge === 'string') {
				minAge = parseInt(minAge);
			}

			if (typeof maxAge === 'string') {
				maxAge = parseInt(maxAge);
			}

			const maxBirthdate = formatISO(getBirthdate(minAge, timeUnit));
			const minBirthdate = formatISO(getBirthdate(maxAge, timeUnit));

			query.AND = [
				{
					birthday: { gte: minBirthdate },
				},
				{
					birthday: { lte: maxBirthdate },
				},
			];
		}

		if (gender) {
			query.gender = gender;
		}

		if (originIds) {
			if (typeof originIds === 'string') {
				originIds = [originIds];
			}

			query.origin = {
				id: { in: originIds },
			};
		}

		if (vaccineIds) {
			if (typeof vaccineIds === 'string') {
				vaccineIds = [vaccineIds];
			}

			query.vaccines = {
				some: {
					id: { in: vaccineIds },
				},
			};
		}

		if (options) {
			if (typeof options === 'string') {
				options = [options];
			}

			query.AND = options.map((item) => {
				if (item.startsWith('is')) {
					// check for Boolean fields
					return {
						[item]: true,
					};
				} else {
					// check for Optional fields
					return {
						NOT: {
							[item]: null,
						},
					};
				}
			});
		}

		const pets = await prisma.pet.findMany({
			where: query,
			orderBy: {
				postedAt: 'desc',
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

		const safePets = pets.map((pet) => ({
			...pet,
			birthday: pet.birthday.toISOString(),
			postedAt: pet.postedAt.toISOString(),
			lister: {
				...pet.lister,
				createdAt: pet.lister.createdAt.toISOString(),
				updatedAt: pet.lister.updatedAt.toISOString(),
				emailVerified: pet.lister.emailVerified?.toISOString() || null,
			},
		}));

		return safePets;
	} catch (error: any) {
		throw new Error(error);
	}
}
