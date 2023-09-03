import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const body = await request.json();
	const countries = await prisma.country.createMany({
		data: body,
	});

	return NextResponse.json(countries);
}
