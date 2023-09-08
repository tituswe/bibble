import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
	const body = await request.json();
	const { chatId, senderId, message } = body;

	if (!senderId) {
		return NextResponse.error();
	}

	const responseMessage = await prisma.message.create({
		data: {
			chatId: chatId,
			senderId: senderId,
			message: message,
		}
	})

	return NextResponse.json(responseMessage);
}
