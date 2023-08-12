'use client';

import { AiOutlineCheck } from 'react-icons/ai';

interface CheckBoxProps {
	isChecked?: boolean;
	setIsChecked?: (e: any) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, setIsChecked }) => {
	return (
		<div
			onClick={setIsChecked}
			className="
        p-3
        border-[1px]
        rounded-lg
        hover:border:neutral-800
        hover:shadow-inner
      "
		>
			{isChecked && (
				<div className="absolute -translate-x-2 -translate-y-2">
					<AiOutlineCheck />
				</div>
			)}
		</div>
	);
};

export default CheckBox;
