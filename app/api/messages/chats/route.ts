import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { Prisma } from '@prisma/client';

interface IParams {
    participantIds: Array<string>;
}

export async function POST(request: Request, { params }: { params: IParams }) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

    const { participantIds } = params;

    try {
        const chat = await prisma.chat.create({
            data: {
                participants: {
                    createMany: {
                        data: participantIds.map(id => ({
                            userId: id,
                            hasSeenLatestMessage: id === currentUser.id
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
    latestMessage: {
        include: {
            sender: {
                select: {
                    id: true,
                    name: true,
                }
            }
        }
    }
})