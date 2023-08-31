import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import { Prisma } from '@prisma/client';

export async function POST(request: Request) {
    const body = await request.json();

	const { currentUserId, participantId, message } = body;

    const participantIds = [currentUserId, participantId];

    if (!currentUserId) {
		return NextResponse.error();
	}

    try {
        const responseChat = await prisma.chat.create({
            data: {
                participants: {
                    createMany: {
                        data: participantIds.map(id => ({
                            userId: id,
                            hasSeenLatestMessage: id === currentUserId
                        }))
                    }
                }
            },
            include: {
                participants: {
                    include: {
                        user: true
                    },
                },
            }
        // }).then( async (chat) => {
        //     const chatId = chat.id;
        //     await prisma.message.create({
        //         data: {
        //             chatId: chatId,
        //             senderId: currentUserId,
        //             message: message,
        //         }
        //     });
        })

        const responseMessage = await prisma.message.create({
            data: {
                chatId: responseChat.id,
                senderId: currentUserId,
                message: message,
            }
        })

        return NextResponse.json({ chat: responseChat, message: responseMessage });
    } catch (error) {
        console.log('createChat error', error);
        return NextResponse.error();
    }
}