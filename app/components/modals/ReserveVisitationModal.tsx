'use client';

import { useState, useEffect } from "react";

import useReserveVisitationModal from "@/app/hooks/useReserveVisitationModal";

import { Calendar } from "react-date-range";

import DateInput from "../inputs/DateInput";
import Modal from "./Modal";
import Dropdown from "../Dropdown";

// MOCK API CALL TO FETCH TIMESLOTS
const getTimeslots = async (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = [10, 11, 12, 13, 14, 15, 16, 17];

    return hours.map((hour) => ({ 'time': new Date(year, month, day, hour), 'available': Math.random() < 0.6 ? true : false }));
}

const ReserveVisitationModal = () => {
    const reserveVisitationModal = useReserveVisitationModal();
    
    const [appointmentDate, setAppointmentDate] = useState<Date>(new Date(Date.now()));
    const [appointmentTime, setAppointmentTime] = useState<Date | null>();
    const [timeslots, setTimeslots] = useState<{ 'time': Date, 'available': boolean }[] | null>();
    const [numberOfVisitors, setNumberOfVisitors] = useState<number>(1);

    const onSubmit = () => {
        console.log('submit');
    };

    useEffect(() => {
        const fetchTimeslots = async () => {
            await getTimeslots(appointmentDate).then((timeslots) => {
                setTimeslots(timeslots);
                console.log(timeslots);
            })
        }

        fetchTimeslots();
    }, [appointmentDate])

    const bodyContent = (
        <div className="flex flex-col gap-4 ">
            <div>
                <label className='text-xl font-semibold'>
                    What's the date?
                </label>

                <div className='flex scale-125 p-4 justify-center'>
                    <DateInput date={appointmentDate} onChange={setAppointmentDate}/>
                </div>
            </div>

            <hr />

            <div>
                {timeslots ? (
                    <>
                    <p className='text-xl font-semibold'>
                        At what time?
                    </p>
                    <div className='flex flex-col gap-2'>
                        {timeslots.map((timeslot, index) => {
                            return (
                                <div key={index}>
                                    {timeslot.available ?
                                        <p>
                                            {timeslot.time.toLocaleString('en-GB', { timeZone: 'SST' })} 
                                        </p> : <p className='line-through'>
                                            {timeslot.time.toLocaleString('en-GB', { timeZone: 'SST' })} 
                                        </p>
                                    }
                                </div>
                            )
                        })}         
                    </div>
                    </>
                ) : (
                    <p className='text-xl font-semibold self-center'>
                        Fetching timeslots...
                    </p>
                )}
            </div>
            
            <hr />

            <div>
                <p className='text-xl font-semibold overflow-hidden'>
                    Who's coming with?
                </p>

            </div>
            
        </div>
    );

    return (
        <Modal
			isOpen={reserveVisitationModal.isOpen}
			onClose={reserveVisitationModal.onClose}
			onSubmit={onSubmit}
			title="Reserve Visitation"
			actionLabel="Reserve"
			body={bodyContent}
		/>
    )
}

export default ReserveVisitationModal;