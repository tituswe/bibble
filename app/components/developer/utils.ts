import { Gender, HairCoat, SaleType } from '@prisma/client';

export function getRandomGender() {
	return Math.random() > 0.5 ? Gender.MALE : Gender.FEMALE;
}

export function getRandomSaleType() {
	return Math.random() > 0.5
		? SaleType.PURCHASE
		: SaleType.ADOPT

}

export function getRandomHairCoat() {
	return Math.random() > 0.5
		? HairCoat.SHORT
		: Math.random() > 0.5
		? HairCoat.MEDIUM
		: HairCoat.LONG;
}

export function getRandomShuffle<T>(array: T[]): T[] {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}

	return shuffledArray;
}

export function getRandom(data: Array<any>): string {
	const randomIndex = Math.floor(Math.random() * data.length);

	return data[randomIndex];
}

export function getRandomId(data: Array<any>): string {
	const randomIndex = Math.floor(Math.random() * data.length);

	return data[randomIndex].id;
}

export function getRandomDate(): Date {
	const currentDate = new Date();
	const randomMonthOffset = Math.floor(Math.random() * 12) + 1;
	const oneMonthAgo = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() - randomMonthOffset,
		currentDate.getDate()
	);
	const timeDifference = currentDate.getTime() - oneMonthAgo.getTime();
	const randomTimeOffset = Math.floor(Math.random() * timeDifference);
	const randomDate = new Date(oneMonthAgo.getTime() + randomTimeOffset);

	return randomDate;
}

export function getRandomPrice(): number {
	const randomPrice = Math.floor(Math.random() * 50) * 100;

	return randomPrice;
}

export function getRandomBoolean(): boolean {
	return Math.random() < 0.5;
}
