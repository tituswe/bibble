'use client';

import { PiCaretUpDownBold } from 'react-icons/pi';
import Checkbox from './Checkbox';

const Header = () => {
	const head = 'LISTING';
	const sections = ['STATUS', 'TO DO', 'LISTED AT'];

	return (
		<>
			<span
				className="
						flex 
						flex-row 
						gap-4 
						py-4
						text-xs
						text-neutral-500 
						font-bold
						items-center
					"
			>
				<Checkbox checked={true} onChange={() => {}} />
				<div className="flex flex-row gap-4 w-full">
					<div className="flex flex-row gap-2 items-center w-full">
						<label>{head}</label>
						<PiCaretUpDownBold />
					</div>
					<div className="hidden lg:flex flex-row">
						{sections.map((item, i) => (
							<div
								key={i}
								className="flex flex-row gap-2 justify-end items-center w-48"
							>
								<label>{item}</label>
								<PiCaretUpDownBold />
							</div>
						))}
					</div>
				</div>
			</span>
			<hr />
		</>
	);
};

export default Header;
