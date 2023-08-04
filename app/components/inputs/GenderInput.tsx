import { toCamelCase } from '@/app/utils/toCamelCase';
import { IconType } from 'react-icons';

interface GenderInputProps {
	icon: IconType;
	label: string;
	selected?: boolean;
	onClick: (value: string) => void;
}

const GenderInput: React.FC<GenderInputProps> = ({
	icon: Icon,
	label,
	selected,
	onClick,
}) => {
	const isMale = label === 'male';

	return (
		<div
			onClick={() => onClick(label)}
			className={`
        rounded-xl
        border-2
        p-4
				pl-2
        flex
        flex-row
        items-center
        justify-center
        gap-3
        ${isMale ? 'hover:border-sky-500' : 'hover:border-rose-500'}
        ${isMale ? 'hover:text-sky-500' : 'hover:text-rose-500'}
        transition
        cursor-pointer
        h-full
        w-full
        ${selected ? (isMale ? 'text-sky-500' : 'text-rose-500') : 'text-black'}
        ${
					selected
						? isMale
							? 'border-sky-500'
							: 'border-rose-500'
						: 'border-neutral-200'
				}
      `}
		>
			<Icon size={30} />
			<div className="font-semibold">{toCamelCase(label)}</div>
		</div>
	);
};

export default GenderInput;
