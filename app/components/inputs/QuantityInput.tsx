'use client';

import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";

interface QuantityInputProps {
    label: string;
    items?: Array<number> | null;  // default is empty array, which means no dropdown will be rendered.
    selectedItem: number | null;
    setSelected: Dispatch<SetStateAction<number | null>>;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ label, items, selectedItem, setSelected}) => {
    const [showDropdown, setShowDropdown] = useState<Boolean>(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleSetSelected = (item: number) => {
        setSelected(item);
        toggleDropdown();
    }

    return (
        <div className='w-1/2 min-h-8 border rounded-xl'>
            <div className='flex p-3 justify-between' onClick={toggleDropdown}>
                <label className='text-lg'>
                    {selectedItem 
                        ? selectedItem == 1
                            ? <p>Just myself</p>
                            : <p>{selectedItem} persons</p>
                        : label
                    }
                </label>

                <button >
                    {showDropdown 
                        ? <AiOutlineUpCircle size={18} className='fill-neutral-700 hover:fill-sky-500 transition'/>
                        : <AiOutlineDownCircle size={18} className='fill-neutral-700 hover:fill-sky-500 transition'/>
                    }
                </button>
            </div>

            {showDropdown && (
                items ? (
                    items.map((item, index) => {
                        return (
                            <>
                            <hr />
                            <ul className='p-2' key={index}>
                                <li className='hover:text-sky-500 transition' onClick={() => handleSetSelected(item)}>
                                    {item} 
                                </li>
                            </ul>
                            </>
                        )
                    })
                ): (
                    <p>NO ITEMS PROVIDED</p>
                )
            )}
        </div>
    )
}

export default QuantityInput;