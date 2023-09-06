import getCurrentUser from '@/app/actions/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';


interface IParams {
	petId?: string;
}

export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	const { petId } = params;

	if (!petId || typeof petId !== 'string') {
		throw new Error('Invalid ID');
	}

	const pet = await prisma.pet.deleteMany({
		where: {
			id: petId,
			listerId: currentUser.id,
		},
	});

	return NextResponse.json(pet);
}
