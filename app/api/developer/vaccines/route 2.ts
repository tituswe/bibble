import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const body = await request.json();
	const vaccines = await prisma.vaccine.createMany({
		data: body,
	});

	return NextResponse.json(vaccines);
}
