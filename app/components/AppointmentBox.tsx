'use client';

import DateInput from "./inputs/DateInput";
import { SafePet } from "../types";
import { useState } from "react";
import Button from "./Button";

interface AppointmentBoxProps {
    pet: SafePet;
}

const AppointmentBox: React.FC<AppointmentBoxProps> = ({ pet }) => {
    const { price } = pet;
    const [appointmentDate, setAppointmentDate] = useState(new Date(Date.now()));
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [appointmentTime, setAppointmentTime] = useState(new Date(Date.now()));
    const [showTimePicker, setShowTimePicker] = useState(false);

    const [numberOfVisitors, setNumberOfVisitors] = useState(1);
    const [showNumberPicker, setShowNumberPicker] = useState(false);

    const toggleShowDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    }

    const toggleShowTimePicker = () => {
        setShowTimePicker(!showTimePicker);
    }

    const toggleShowNumberPicker = () => {
        setShowNumberPicker(!showNumberPicker);
    }

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
                drop-shadow-xl
                '
        >
            <div className="w-5/6 mt-8 mb-2">
                <p className='text-left text-2xl font-bold'>${price} SGD</p>
            </div>
            
            <div className="w-5/6 rounded-3xl border border-neutral-200">
                <div className="flex">
                    <div className="relative w-1/2 border-r p-3 pl-5">
                        <p className="text-lg font-semibold">Date</p>
                        <button className="underline underline-offset-2 font-light" onClick={toggleShowDatePicker}>{appointmentDate.getDate()}/{appointmentDate.getMonth()}/{appointmentDate.getFullYear()}</button>
                        {showDatePicker && (
                            <div className="absolute z-10 top-13 right-0 bg-white p-3 shadow-2xl rounded-xl">
                                <DateInput date={appointmentDate} onChange={(date: Date) => setAppointmentDate(date)}/>
                                <Button label="Select Date" onClick={toggleShowDatePicker}/>
                            </div>
                        )}
                    </div>
                    
                    <div className="relative w-1/2 p-3 pl-5">
                        <p className="text-lg font-semibold">Time</p>
                        <button className="underline underline-offset-2 font-light" onClick={toggleShowTimePicker}>{appointmentTime.getHours()} : {appointmentTime.getMinutes()} hrs</button>
                        {showTimePicker && (
                            <div className="absolute z-10 top-13 right-0 bg-white p-3 shadow-2xl rounded-xl">
                                <p>TODO: Implement Time Picker</p>
                                <Button label="Select Time" onClick={toggleShowTimePicker}/>
                            </div>
                        )}
                    </div>
                </div>
                
                <hr className='border-r border-neutral-200'/>
                
                <div className="flex">
                    <div className="relative w-1/2 p-3 pl-5">
                        <p className="text-lg font-semibold">Number of Visitors</p>
                        <button className="underline underline-offset-2 font-light" onClick={toggleShowNumberPicker}>{numberOfVisitors} persons</button>
                        {showNumberPicker && (
                            <div className="absolute z-10 top-13 left-3 bg-white p-3 shadow-2xl rounded-xl">
                                <p>TODO: Implement Number Picker</p>
                                <Button label="Select Number" onClick={toggleShowNumberPicker}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="w-5/6 mt-4">
                <Button label="Reserve Visitation" onClick={handleReserveVisitation}/>
            </div>

            <div className="w-5/6 flex gap-1 place-items-center">
                <hr className='w-1/2 border-neutral-200'/>
                <p>OR</p>
                <hr className='w-1/2 border-neutral-200'/>
            </div>
            
            <div className="w-5/6 mb-8">
                <Button label="Contact Lister" onClick={handleContactLister} outline/>
            </div>
        </div>
	);
};

export default AppointmentBox;