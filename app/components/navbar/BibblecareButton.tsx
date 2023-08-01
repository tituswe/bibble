import { LuPartyPopper } from 'react-icons/lu';

interface BibblecareButtonProps {
	disabled?: boolean;
}

const BibblecareButton: React.FC<BibblecareButtonProps> = ({ disabled }) => {
	return (
		<div className="relative">
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
					<div className="hidden md:block py-1.5">
						<LuPartyPopper size={18} />
					</div>
					Bibblecare
				</div>
			</div>
		</div>
	);
};

export default BibblecareButton;
