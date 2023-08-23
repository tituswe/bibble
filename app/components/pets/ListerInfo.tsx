'use client';

import { AiOutlineUser } from 'react-icons/ai';
import { BiBadgeCheck } from 'react-icons/bi';

import { SafePet, SafeUser } from "@/app/types";

import Avatar from '@/app/components/Avatar';
import Button from '@/app/components/Button';
import GeoCard from '@/app/components/GeoCard';
import Heading from '@/app/components/Heading';

interface ListerInfoProps {
	lister: SafeUser;
}

const ListerInfo: React.FC<ListerInfoProps> = ({ lister }) => {

    const getDateJoined = () => {
		let dateJoined = new Date(lister.createdAt);
		let monthsDict = {
			'Jan': 1,
			'Feb': 2,
			'Mar': 3,
			'Apr': 4,
			'May': 5,
			'Jun': 6,
			'Jul': 7,
			'Aug': 8,
			'Sep': 9,
			'Oct': 10,
			'Nov': 11,
			'Dec': 12
			};
		let month = 'MONTH';
		Object.entries(monthsDict).forEach((entry) => {
			let monthName = entry[0];
			let monthIndex = entry[1];
			if (dateJoined.getMonth() == monthIndex) {
				month = monthName;
			}
		});

		return `${month} ${dateJoined.getFullYear()}`
	};

    return (
        <>
        {/* Divider */}
        <div className='flex items-center gap-1'>
                <AiOutlineUser size={23} className='fill-neutral-300'/> <hr className='grow'/>
            </div>

            <div className='grid grid-cols-2 gap-8'>
                {/* Left Column */}
                <div className='flex flex-col gap-6'>
                    {/* Lister Banner */}
                    <div className='flex flex-rows items-center gap-4'>
                        <div className='ml-1 aspect-square'>
                            <Avatar src={lister.image} large/>
                        </div>
                        <div className='grid grid-rows-2 gap-0'>
                            <div className='flex items-center gap-1'>
                                <p className='text-2xl font-bold'>
                                    {lister.name ? lister.name : 'NO LISTER NAME'}
                                </p>
                                {/* TODO: Add check for verified account */}
                                <BiBadgeCheck size={22} className='fill-sky-500'/>
                            </div>

                            <p>Joined in {getDateJoined()}</p>
                        </div>
                    </div>

                    {/* Lister Description */}
                    <div className=''>
                        <p>
                            {lister.profile.bio}
                        </p>
                    </div>

                    <div className='w-1/3 self-center'>
                        <Button label='Contact Lister' onClick={() => {}} outline/>
                    </div>
                </div>

                {/* Right Column */}
                {/* TODO: ADD LISTER ADDRESS FIELD TO DB */}
                <GeoCard location={'10 Heng Mui Keng Terrace'}/> 
            </div>
        </>
    )
}

export default ListerInfo;