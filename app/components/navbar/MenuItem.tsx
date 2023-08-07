'use client';

interface MenuItemProps {
	onClick: () => void;
	label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
	return (
		<div
			onClick={onClick}
			className="
			p-4
      hover:bg-neutral-100
      transition
    "
		>
			{label}
		</div>
	);
};

export default MenuItem;
