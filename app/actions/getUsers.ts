import prisma from '@/app/libs/prismadb';

export default async function getUsers() {
	try {
		const users = await prisma.user.findMany();

		const safeUsers = users.map((user) => ({
			...user,
			createdAt: user.createdAt.toISOString(),
			updatedAt: user.updatedAt.toISOString(),
			emailVerified: user.emailVerified?.toISOString() || null,
		}));

		return safeUsers;
	} catch (error: any) {
		throw new Error(error);
	}
}
