'use client';

import { BiCurrentLocation } from "react-icons/bi";

interface GeoCardProps {

}

const GeoCard: React.FC<GeoCardProps> = ({ }) => {
    const GOOGLE_MAPS_API_KEY = 'AIzaSyB7fMl7N6wsGHbbw5duRQUMPzY3lwGYRHE';

    return (
        <div className='h-60 bg-neutral-200 shadow-xl rounded-2xl'>
            {/* Header */}
            <div className='flex flex-rows m-4 justify-between items-center'>
                <BiCurrentLocation size={20} className='fill-neutral-500'/>
                <p className='text-neutral-500'>
                    Location, Singapore
                </p>
            </div>

            {/* Map */}
            <div className='h-60 bg-white content-center'>
                <div>MAP</div>
            </div>
        </div>
    );
}

export default GeoCard;