export default function getBirthdate(
	age: number,
	format?: 'first' | 'last'
): Date {
	const currentDate = new Date();
	const newDate = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() - age,
		currentDate.getDate()
	);

	if (format === 'first') {
		newDate.setMonth(newDate.getMonth() - 1, 1);
	}

	if (format === 'last') {
		newDate.setMonth(newDate.getMonth() + 1, 0);
	}

	return newDate;
}
