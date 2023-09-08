import prisma from '@/app/libs/prismadb';

interface IChatParams {
	userId: string | undefined;
}

export default async function getChatsByUserId(params: IChatParams) {
	try {
		const { userId } = params;
		
		if (!userId) {
			throw new Error('Not authorised');
		}

		const chatParticipants = await prisma.chatParticipant.findMany({
            where: {
				userId: userId
            },
			include: {
				chat: {
					include: {
						listing: {
							include: {
								avsLicense: true,
								breed: true,
								origin: true,
								species: true,
								lister: true,
							}
						},
						participants: {
							include: {
								user: true
							}
						},
						messages: {
							include: {
								sender: true
							}
						},
					}
				}
			}
        });

		return chatParticipants.map(c => {
			const chat = c.chat;

			const safeChat = {
				...chat,
				createdAt: chat.createdAt.toISOString(),
				updatedAt: chat.updatedAt.toISOString(),
				listing: {
					...chat.listing,
					birthday: chat.listing.birthday.toISOString(),
					postedAt: chat.listing.postedAt.toISOString(),
					lister: {
						...chat.listing.lister,
						createdAt: chat.listing.lister.createdAt.toISOString(),
						updatedAt: chat.listing.lister.updatedAt.toISOString(),
						emailVerified: chat.listing.lister.emailVerified?.toISOString() || null,
					},
				},
				participants: chat.participants.map(p => (
					{
						...p,
						createdAt: p.createdAt.toISOString(),
						updatedAt: p.updatedAt.toISOString(),
						user: {
							...p.user,
							createdAt: p.user.createdAt.toISOString(),
							updatedAt: p.user.updatedAt.toISOString(),
							emailVerified: p.user.emailVerified?.toISOString() || null,
						},
					}
				)),
				messages: chat.messages.map(c => (
					{
						...c,
						createdAt: c.createdAt.toISOString(),
						updatedAt: c.updatedAt.toISOString(),
						sender: {
							...c.sender,
							createdAt: c.sender.createdAt.toISOString(),
							updatedAt: c.sender.updatedAt.toISOString(),
							emailVerified: c.sender.emailVerified?.toISOString() || null,
						}
					}
				))
			}

			return safeChat;
		});
	} catch (error: any) {
		throw new Error(error);
	}
}
