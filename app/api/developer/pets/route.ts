import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const body = await request.json();
	const pets = await prisma.pet.createMany({
		data: body,
	});

	return NextResponse.json(pets);
}
