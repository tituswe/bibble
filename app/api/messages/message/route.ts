import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

interface IParams {
}

export async function POST(request: Request, { params }: { params: IParams }) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	return NextResponse.json(null);
}
