import { IconType } from 'react-icons';
import { AiOutlineMedicineBox, AiOutlineShop } from 'react-icons/ai';

enum Position {
	LEFT,
	MIDDLE,
	RIGHT,
}

interface SaleTypeOptionProps {
	label: string;
	icon: IconType;
	position: Position;
	description: string;
}

const SaleTypeOption: React.FC<SaleTypeOptionProps> = ({
	label,
	icon: Icon,
	position,
	description,
}) => {
	return (
		<div
			className={`
			flex 
			flex-col 
			p-4 
			border-[1px] 
			${
				position === Position.LEFT
					? 'rounded-l-2xl'
					: position === Position.RIGHT
					? 'rounded-r-2xl'
					: 'rounded-none'
			}
			w-[200px]
			items-center
			hover:shadow-inner
			hover:bg-neutral-100
		`}
		>
			<div className="flex flex-row items-center gap-2">
				<div className="font-semibold">{label}</div>
				<div className="text-lg text-neutral-500">
					<Icon />
				</div>
			</div>
			<div className="text-sm text-neutral-500">{description}</div>
		</div>
	);
};

const SaleTypeInput = () => {
	return (
		<div onClick={() => {}} className="flex flex-col justify-center gap-4">
			<div className="font-semibold text-xl">Type of pet</div>
			<div className="flex flex-row">
				<SaleTypeOption
					label="Sale"
					icon={AiOutlineShop}
					position={Position.LEFT}
					description="From a verified seller"
				/>
				<SaleTypeOption
					label="Rescue"
					icon={AiOutlineMedicineBox}
					position={Position.RIGHT}
					description="From an adoption home"
				/>
			</div>
			<div className="font-light text-sm">
				Find a pet from one of our verified sellers or loving adoption homes.
			</div>
		</div>
	);
};
export default SaleTypeInput;
