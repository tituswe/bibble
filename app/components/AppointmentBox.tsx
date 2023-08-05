'use client';

import { SafePet } from "../types";

interface AppointmentBoxProps {
    pet: SafePet;
}

const AppointmentBox: React.FC<AppointmentBoxProps> = ({ pet }) => {
    const { price } = pet;
	return (
        <div className='grid grid-rows-5 gap-2 place-items-center rounded-2xl border-2 border-neutral-200 bg-white drop-shadow-lg'>
            <p className='place-self-start font-semibold'>${price}</p>
            
            <div className='w-3/4 grid grid-rows-2 rounded-full divide-y border-2 border-neutral-200bg-white'>
                <div className='grid grid-cols-2 divide-x'>
                    <p>hi</p>
                    <p>hi</p>
                </div>
                <p>hi</p>
            </div>
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
        </div>
	);
};

export default AppointmentBox;