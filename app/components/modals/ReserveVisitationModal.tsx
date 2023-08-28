'use client';

import { useEffect, useState } from 'react';

import useReserveVisitationModal from '@/app/hooks/useReserveVisitationModal';

import TimeslotSelect from '../TimeslotSelect';
import DateInput from '../inputs/DateInput';
import QuantityInput from '../inputs/QuantityInput';
import Modal from './Modal';

// MOCK API CALL TO FETCH TIMESLOTS
const getTimeslots = async (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const hours = [10, 11, 12, 13, 14, 15, 16, 17];

	return hours.map((hour) => ({
		time: new Date(year, month, day, hour),
		available: Math.random() < 0.6 ? true : false,
	}));
};

const ReserveVisitationModal = () => {
	const reserveVisitationModal = useReserveVisitationModal();

	const [appointmentDate, setAppointmentDate] = useState<Date>(
		reserveVisitationModal.date
	);
	const [appointmentTime, setAppointmentTime] = useState<Date | null>(
		reserveVisitationModal.time
	);
	const [timeslots, setTimeslots] = useState<
		{ time: Date; available: boolean }[] | null
	>();
	const [numberOfVisitors, setNumberOfVisitors] = useState<number | null>(
		reserveVisitationModal.numberOfVisitors
	);

	const handleSubmit = () => {
		reserveVisitationModal.date = appointmentDate;
		reserveVisitationModal.time = appointmentTime;
		reserveVisitationModal.numberOfVisitors = numberOfVisitors;
		reserveVisitationModal.onClose();
	};

	const handleClose = () => {
		reserveVisitationModal.date = appointmentDate;
		reserveVisitationModal.time = appointmentTime;
		reserveVisitationModal.numberOfVisitors = numberOfVisitors;
		reserveVisitationModal.onClose();
	};

	const handleSetAppointmentDate = (date: Date) => {
		setAppointmentDate(date);
		setAppointmentTime(null);
	};

	useEffect(() => {
		const fetchTimeslots = async () => {
			await getTimeslots(appointmentDate).then((timeslots) => {
				setTimeslots(timeslots);
			});
		};

		fetchTimeslots();
	}, [appointmentDate]);

	const bodyContent = (
		<div className="flex flex-col gap-4 ">
			<div>
				<label className="text-xl font-semibold">{"What's the date?"}</label>

				<div className="flex scale-125 p-4 justify-center">
					<DateInput
						date={appointmentDate}
						onChange={handleSetAppointmentDate}
					/>
				</div>
			</div>

			<hr />

			<div>
				{timeslots ? (
					<>
						<label className="text-xl font-semibold">At what time?</label>
						<div className="pt-2">
							<TimeslotSelect
								label={'Select Timeslot'}
								timeslots={timeslots}
								selectedTimeslot={appointmentTime}
								setSelectedTimeslot={setAppointmentTime}
							/>
						</div>
					</>
				) : (
					<p className="text-xl font-semibold self-center">
						Fetching timeslots...
					</p>
				)}
			</div>

			<hr />

			<div>
				<label className="text-xl font-semibold overflow-hidden">
					{"Who's coming with?"}
				</label>

				<div className="pt-2">
					<QuantityInput
						label={'Select Number'}
						items={[1, 2, 3, 4, 5]}
						selectedItem={numberOfVisitors}
						setSelected={setNumberOfVisitors}
					/>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			isOpen={reserveVisitationModal.isOpen}
			onClose={handleClose}
			onSubmit={handleSubmit}
			title="Reserve Visitation"
			actionLabel="Reserve"
			body={bodyContent}
		/>
	);
};

export default ReserveVisitationModal;
