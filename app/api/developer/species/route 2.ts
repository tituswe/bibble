import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const body = await request.json();

	const species = await prisma.species.createMany({
		data: body,
	});

	return NextResponse.json(species);
}
