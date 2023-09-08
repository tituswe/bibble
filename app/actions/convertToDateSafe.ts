import { Account, Chat, ChatParticipant, Message, Pet, Profile, User } from "@prisma/client";

export function convertToSafeUser(user: User) {
	return {
		...user,
		createdAt: user.createdAt.toISOString(),
		updatedAt: user.updatedAt.toISOString(),
		emailVerified: user.emailVerified?.toISOString() || null,
	}
}

export function convertToSafePet(pet: Pet) {
	return {
		...pet,
		birthday: pet.birthday.toISOString(),
		postedAt: pet.postedAt.toISOString(),
	};
}

export function convertToSafeChatParticipant(chatParticipant: ChatParticipant) {
	return {
		...chatParticipant,
		createdAt: chatParticipant.createdAt.toISOString(),
		updatedAt: chatParticipant.updatedAt.toISOString(),
	}
}

export function convertToSafeChat(chat: Chat) {
	return {
		...chat,
		createdAt: chat.createdAt.toISOString(),
		updatedAt: chat.updatedAt.toISOString(),
	}
}

export function convertToSafeMessage(message: Message) {
	return {
		...message,
		createdAt: message.createdAt.toISOString(),
		updatedAt: message.updatedAt.toISOString(),
	}
}