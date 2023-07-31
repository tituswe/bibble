import { Pet, User } from '@prisma/client';

export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified'
> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
};

export type SafePet = Omit<Pet, 'birthday' | 'postedAt'> & {
	birthday: string;
	postedAt: string;
};
