'use client';

import { FaHourglassHalf } from 'react-icons/fa';

const StatusBox = () => {
	return (
		<div className="flex flex-row gap-2">
			<FaHourglassHalf size={14} />
			<label
				className="
					text-sm
					text-neutral-500
					font-light
				"
			>
				In Progress
			</label>
		</div>
	);
};

export default StatusBox;
