interface ButtonProps {
	label: String;
	onClick?: () => void;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
	return (
		<div className="relative hidden md:block">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={onClick}
					className={`
            p-4
            md:py-1
            md:pr-3
            md:pl-4
            text-sm
            font-semibold
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            ${!disabled && 'cursor-pointer'}
            ${!disabled && 'hover:shadow-md'}
						${!disabled && 'hover:scale-110'}
            transition
            whitespace-nowrap
            ${disabled && 'text-neutral-300'}
          `}
				>
					{label}
				</div>
			</div>
		</div>
	);
};

export default Button;
