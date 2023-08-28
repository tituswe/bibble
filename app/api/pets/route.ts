import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	const body = await request.json();
	const { breed, gender, name, birthday, images, price } = body;

	Object.keys(body).forEach((value: any) => {
		if (!body[value]) {
			return NextResponse.error();
		}
	});

	const pet = await prisma.pet.create({
		data: {
			breed,
			gender,
			name,
			birthday,
			images,
			price: parseInt(price, 10),
			listerId: currentUser.id,
		},
	});

	return NextResponse.json(pet);
}
