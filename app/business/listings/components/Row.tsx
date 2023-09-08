'use client';

import Checkbox from './Checkbox';
import ListedAtBox from './ListedAtBox';
import ListingBox from './ListingBox';
import StatusBox from './StatusBox';
import ToDoBox from './ToDoBox';

const Row = () => {
	return (
		<>
			<span
				className="
						flex 
						flex-row 
						gap-4 
						py-4
						items-center
					"
			>
				<Checkbox checked={true} onChange={() => {}} />
				<div className="flex flex-row items-center gap-4 w-full">
					<ListingBox />
					<div className="hidden lg:flex flex-row">
						<div className="flex flex-row gap-2 justify-end items-center w-48">
							<StatusBox />
						</div>
						<div className="flex flex-row gap-2 justify-end items-center w-48">
							<ToDoBox />
						</div>
						<div className="flex flex-row gap-2 justify-end items-center w-48">
							<ListedAtBox />
						</div>
					</div>
				</div>
			</span>
			<hr />
		</>
	);
};

export default Row;
