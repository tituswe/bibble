export const toCamelCase = (str: string) => {
	const newStr = str.toLowerCase();
	return newStr.charAt(0).toUpperCase() + newStr.slice(1);
};
