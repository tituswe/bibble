'use client';

interface LinkTextProps {
	children: React.ReactNode;
	bold?: boolean;
}

const LinkText: React.FC<LinkTextProps> = ({ children, bold }) => {
	return (
		<div
			onClick={() => {}}
			className={`
        ${bold && 'font-medium'} 
        font-light 
        text-sm 
        p-3 
        hover:underline
      `}
		>
			{children}
		</div>
	);
};

export default LinkText;
