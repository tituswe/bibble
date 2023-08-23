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
		<div className='object-none aspect-square h-80' >
			<Calendar date={date} onChange={onChange} />
		</div>
	);
};

export default DateInput;
