'use client';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { GeocodeResponse } from '../types';
import Map from './Map';

interface GeoCardProps {
	location: string;
}

const GeoCard: React.FC<GeoCardProps> = ({ location }) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [data, setData] = useState<{
		address: string;
		coordinates: { lat: number; lng: number };
	} | null>(null);

	useEffect(() => {
		const getCoordinates = async () => {
			try {
				let request_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
					location
				)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
				const data = await axios.get(request_url).then((response) => {
					const data: GeocodeResponse = response.data;
					return {
						address: data.results[0].formatted_address,
						coordinates: {
							lat: data.results[0].geometry.location.lat,
							lng: data.results[0].geometry.location.lng,
						},
					};
				});
				return data;
			} catch (error) {
				throw new Error('Something went wrong with GeoCard');
			}
		};
		getCoordinates().then((data) => {
			setData(data ? data : null);
			setIsLoaded(true);
		});
	}, [location]);

	return isLoaded ? (
		<div className="h-4/6 bg-neutral-200 shadow-xl rounded-2xl">
			{/* Header */}
			<div className="flex flex-rows m-4 justify-between items-center">
				<BiCurrentLocation size={20} className="fill-neutral-500" />
				<p className="text-neutral-500">
					{data ? data.address : 'NO ADDRESS FOUND'}
				</p>
			</div>

			{/* Map */}
			<div className="h-5/6 bg-white content-center">
				<Map
					coordinates={data ? data.coordinates : { lat: -25.344, lng: 131.031 }}
				/>
			</div>
		</div>
	) : (
		<div className="flex h-64 bg-neutral-200 shadow-xl rounded-2xl items-center">
			<AiOutlineLoading
				size={60}
				className="basis-full fill-sky-500 animate-spin"
			/>
		</div>
	);
};

export default GeoCard;
