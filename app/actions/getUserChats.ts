import prisma from '@/app/libs/prismadb';

interface IChatParams {
	currentUserId: string | null;
}

export default async function getUserChats(params: IChatParams) {
	try {
		const { currentUserId } = params;
		
		if (!currentUserId) {
			throw new Error('Not authorised');
		}

		const chats = await prisma.chatParticipant.findMany({
            where: {
				userId: currentUserId
            },
			include: {
				chat: {
					include: {
						participants: {
							include: {
								user: true
							}
						},
						messages: true
					}
				}
			}
        });

		return chats.map(c => c.chat);
	} catch (error: any) {
		throw new Error(error);
	}
}
