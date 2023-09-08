import {
  Account,
	AvsLicense,
	Breed,
  Chat,
  ChatParticipant,
	Country,
  Message,
	Pet,
	Profile,
	Species,
	User,
} from '@prisma/client';

export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified'
> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
};

export type SafePet = Omit<Pet, 'birthday' | 'postedAt'> & {
	birthday: string;
	postedAt: string;
};

export type SafeMessage = Omit<Message, 'createdAt' | 'updatedAt'> & {
	createdAt: string;
	updatedAt: string;
}

export type SafeChat = Omit<Chat, 'createdAt' | 'updatedAt'> & {
	createdAt: string;
	updatedAt: string;
}

export type SafeChatParticipant = Omit<ChatParticipant, 'createdAt' | 'updatedAt'> & {
	createdAt: string;
	updatedAt: string;
}

export type GeocodeResponse = {
	results: [
		{
			address_components: [
				{
					long_name: string;
					short_name: string;
					types: [string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: string;
					short_name: string;
					types: [string, string];
				},
				{
					long_name: number;
					short_name: number;
					types: [string];
				}
			];
			formatted_address: string;
			geometry: {
				location: {
					lat: number;
					lng: number;
				};
				location_type: string;
				viewport: {
					northeast: {
						lat: number;
						lng: number;
					};
					southwest: {
						lat: number;
						lng: number;
					};
				};
			};
			place_id: string;
			plus_code: {
				compound_code: string;
				global_code: string;
			};
			types: [string];
		}
	];
	status: string;
};

export type TimeUnit = 'months' | 'years';
