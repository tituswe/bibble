import { SafePet } from '../types';

export const usePriceRange = (pets: Array<SafePet>) => {
	if (pets.length === 0) {
		return { MIN_PRICE: 0, MAX_PRICE: 0 };
	}

	let MIN_PRICE = pets[0].price;
	let MAX_PRICE = pets[0].price;

	pets.forEach((item) => {
		MIN_PRICE = Math.min(item.price, MIN_PRICE);
		MAX_PRICE = Math.max(item.price, MAX_PRICE);
	});

	return { MIN_PRICE, MAX_PRICE };
};
