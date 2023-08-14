import { IconType } from 'react-icons';

interface LabelButtonProps {
	disabled?: boolean;
	label: string;
	icon: IconType;
}

const LabelButton: React.FC<LabelButtonProps> = ({
	disabled,
	label,
	icon: Icon,
}) => {
	return (
		<li className="relative hidden md:block">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={() => {}}
					className={`
            p-4
            md:py-1
            md:pr-3
            md:pl-4
            text-sm
            font-semibold
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            ${!disabled && 'cursor-pointer'}
            ${!disabled && 'hover:shadow-md'}
            ${!disabled && 'hover:bg-neutral-200'}
						${!disabled && 'hover:scale-110'}
            ${disabled && 'text-neutral-300'}
            transition
            whitespace-nowrap
          `}
				>
					<div className="py-1.5">
						<Icon size={18} />
					</div>
					{label}
				</div>
			</div>
		</li>
	);
};

export default LabelButton;
