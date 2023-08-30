import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { Prisma } from '@prisma/client';

export async function POST(request: Request) {
    const body = await request.json();
	const { currentUserId, participantId } = body;

    const participantIds = [currentUserId, participantId];

    if (!currentUserId) {
		return NextResponse.error();
	}

    try {
        const chat = await prisma.chat.create({
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
            include: chatPopulated,
        });

        return NextResponse.json(chat);
    } catch (error) {
        console.log('createChat error', error);
        return NextResponse.error();
    }
}

export const participantPopulated = Prisma.validator<Prisma.ChatParticipantInclude>()({
    user: {
        select: {
            id: true,
            name: true,
        }
    }
})

export const chatPopulated = Prisma.validator<Prisma.ChatInclude>()({
    participants: {
        include: participantPopulated,
    },
    // latestMessage: {
    //     include: {
    //         sender: {
    //             select: {
    //                 id: true,
    //                 name: true,
    //             }
    //         }
    //     }
    // }
})