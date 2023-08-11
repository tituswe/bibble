'use client';

import { useState } from "react";
import useReserveVisitationModal from "../hooks/useReserveVisitationModal";

import { BiChevronDownCircle } from 'react-icons/bi';

import { SafePet } from '@/app/types';

import Button from "./Button";

interface AppointmentBoxProps {
    pet: SafePet;
}

const AppointmentBox: React.FC<AppointmentBoxProps> = ({ pet }) => {
    const { price } = pet;

    const reserveVisitationModal = useReserveVisitationModal();
    
    const [appointmentDate, setAppointmentDate] = useState(new Date(Date.now()));
    const [appointmentTime, setAppointmentTime] = useState(new Date(Date.now()));
    const [numberOfVisitors, setNumberOfVisitors] = useState(1);

    const handleReserveVisitation = () => {
        // TODO: Implement reserve visitation
    }

    const handleContactLister = () => {
        // TODO: Implement contact lister
    }

	return (
        <div 
            className='
                sticky
                grid 
                grid-cols-none
                gap-2
                place-items-center
                rounded-2xl
                border
                border-neutral-200
                bg-white
                shadow-xl
                '
        >
            <div className="w-5/6 mt-8 mb-2">
                <p className='text-left text-2xl font-bold'>${price} SGD</p>
            </div>
            
            <div className="w-5/6 rounded-3xl border border-neutral-200">
                <div className="flex">
                    <div className="relative w-1/2 border-r p-3 pl-5">
                        <p className="text-lg font-semibold">Date</p>
                        <button className="underline underline-offset-2 font-light hover:text-sky-500 transition"
                        onClick={reserveVisitationModal.onOpen}>
                            {appointmentDate.getDate()}/{appointmentDate.getMonth()}/{appointmentDate.getFullYear()}
                        </button>
                    </div>
                    
                    <div className="relative w-1/2 p-3 pl-5">
                        <p className="text-lg font-semibold">Time</p>
                        <button className="underline underline-offset-2 font-light hover:text-sky-500 transition" 
                        onClick={reserveVisitationModal.onOpen}>
                            {appointmentTime.getHours()} : {appointmentTime.getMinutes()} hrs
                        </button>

                    </div>
                </div>
                
                <hr className='border-r'/>
                
                <div className="flex justify-between">
                    <div className="relative w-1/2 p-3 pl-5">
                        <p className="text-lg font-semibold">Number of Visitors</p>
                        <button className="underline underline-offset-2 font-light hover:text-sky-500 transition"
                        onClick={reserveVisitationModal.onOpen}>
                            {numberOfVisitors} persons
                        </button>
                    </div>
                    <button className='p-3 pr-5 self-center' onClick={reserveVisitationModal.onOpen}>
                        <BiChevronDownCircle size={24} className='fill-neutral-700 hover:fill-sky-500 transition'/>
                    </button>
                </div>
            </div>
            
            <div className="w-5/6 mt-4">
                <Button label="Reserve Visitation" onClick={handleReserveVisitation}/>
            </div>

            <div className="w-5/6 flex gap-1 place-items-center">
                <hr className='w-1/2'/>
                <p>OR</p>
                <hr className='w-1/2'/>
            </div>
            
            <div className="w-5/6 mb-8">
                <Button label="Contact Lister" onClick={handleContactLister} outline/>
            </div>
        </div>
	);
};

export default AppointmentBox;