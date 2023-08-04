'use client';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil

import { Calendar } from 'react-date-range';

interface BirthdayInputProps {
	date: Date;
	onChange: (value: Date) => void;
}

const BirthdayInput: React.FC<BirthdayInputProps> = ({ date, onChange }) => {
	return (
		<div className="flex justify-center items-center">
			<Calendar date={date} onChange={onChange} />
		</div>
	);
};

export default BirthdayInput;
