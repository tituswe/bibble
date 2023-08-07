import { IconType } from 'react-icons';

interface ButtonProps {
	onClick: () => void;
	icon: IconType;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, icon: Icon, disabled }) => {
	return (
		<div className="hidden lg:block">
			<div
				onClick={onClick}
				className={`
        relative
        w-10
        h-10 
        rounded-full 
        flex 
        items-center 
        justify-center
        transition
        ${!disabled && 'cursor-pointer'}
        ${!disabled && 'hover:scale-110'}
        ${!disabled && 'hover:bg-neutral-200'}
        ${!disabled && 'hover:shadow-md'}
        ${disabled && 'text-neutral-300'}
      `}
			>
				<Icon size={18} />
			</div>
		</div>
	);
};

export default Button;
