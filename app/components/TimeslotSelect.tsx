'use client';

import { Dispatch, SetStateAction, useState } from "react";

import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";

interface TimeslotSelectProps {
    label: string;
    timeslots?: Array<{ time: Date, available: boolean }> | null;  // default is empty array, which means no dropdown will be rendered.
    selectedTimeslot: Date | null;
    setSelectedTimeslot: Dispatch<SetStateAction<Date | null>>;
}

const TimeslotSelect: React.FC<TimeslotSelectProps> = ({ label, timeslots, selectedTimeslot, setSelectedTimeslot }) => {
    const [showTimeslots, setShowTimeslots] = useState<boolean>(false);

    const toggleTimeslotSelect = () => {
        setShowTimeslots(!showTimeslots);
    }


    return (
        <div className='w-1/2 min-h-8 border rounded-xl'>
            <div className='flex p-3 justify-between' onClick={toggleTimeslotSelect}>
                <label className='text-lg'>
                    {selectedTimeslot ? selectedTimeslot.toTimeString().replace(" GMT+0800 (Singapore Standard Time)", "") : label}
                </label>

                <button >
                    {showTimeslots 
                        ? <AiOutlineUpCircle size={18} className='fill-neutral-700 hover:fill-sky-500 transition'/>
                        : <AiOutlineDownCircle size={18} className='fill-neutral-700 hover:fill-sky-500 transition'/>
                    }
                </button>
            </div>

            {showTimeslots && (
                timeslots ? (
                    timeslots.map((timeslot, index) => {
                        return (
                            <>
                            <hr />
                            <ul className='p-2' key={index}>
                                {timeslot.available ?
                                    <li className='hover:text-sky-500 transition' onClick={() => setSelectedTimeslot(timeslot.time)}>
                                        {timeslot.time.toTimeString().replace(" GMT+0800 (Singapore Standard Time)", "")} 
                                    </li> : <li className='line-through text-red-500 decoration-red-500'>
                                        {timeslot.time.toTimeString().replace(" GMT+0800 (Singapore Standard Time)", "")} 
                                    </li>
                                }
                            </ul>
                            </>
                        )
                    })
                ) : (
                    <p>NO SLOTS FOUND</p>
                )
            )}
        </div>
    )
}

export default TimeslotSelect;