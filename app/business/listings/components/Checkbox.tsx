'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';

type CheckboxProps = {
	checked: boolean;
	onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
	return (
		<label className="flex items-center space-x-3 cursor-pointer">
			<div className="relative">
				<input
					type="checkbox"
					className="hidden"
					checked={checked}
					onChange={(e) => onChange(e.target.checked)}
				/>
				<div
					className={`
            w-4 
            h-4 
            border 
            rounded-md
            ${checked ? 'bg-sky-500' : 'bg-white'} 
            border-gray-300 
            flex 
            justify-center 
            items-center
          `}
				>
					{checked && <FaCheck className="text-white" size={8} />}
				</div>
			</div>
		</label>
	);
};

export default Checkbox;
