'use client';

import { useMemo } from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface MapProps {
    coordinates: {
        lat: number,
        lng: number
    }
}

const Map: React.FC<MapProps> = ({ coordinates }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY : 'NO API KEY FOUND'
      });

    const center = useMemo(() => (coordinates), []);

    return isLoaded ? (
        <GoogleMap
            mapContainerClassName="w-full h-full"
            center={center}
            zoom={16}
        >
            <Marker position={coordinates} />
        </GoogleMap>
    ) : <></>
}

export default Map;