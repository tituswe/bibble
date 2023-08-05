'use client';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil

import { Calendar } from 'react-date-range';

interface DateInputProps {
	date: Date;
	onChange: (value: Date) => void;
}

const DateInput: React.FC<DateInputProps> = ({ date, onChange }) => {
	return (
		<div className="flex justify-center items-center">
			<Calendar date={date} onChange={onChange} />
		</div>
	);
};

export default DateInput;
