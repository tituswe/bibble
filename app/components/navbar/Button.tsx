import { IconType } from 'react-icons';

interface ButtonProps {
	onClick: () => void;
	icon: IconType;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, icon: Icon, disabled }) => {
	return (
		<div
			onClick={onClick}
			className={`
        relative
        w-10
        h-10 
        border 
        rounded-full 
        flex 
        items-center 
        justify-center
        ${!disabled && 'cursor-pointer'}
        ${!disabled && 'hover:scale-110'}
        ${!disabled && 'hover:shadow-md'}
        ${disabled && 'text-neutral-300'}
      `}
		>
			<Icon size={18} />
		</div>
	);
};

export default Button;
