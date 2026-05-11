import TravelCard from '@/components/TravelCard';
import React from 'react';

const DestinationPage = async () => {

    const res = await fetch('http://localhost:5000/destination')
    const data = await res.json()
    // console.log(data)

    return (
        <div className='container mx-auto'>
            <h3 className='font-bold text-xl py-4'>
                Top Destination
            </h3>

            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(destination => <TravelCard key={destination._id} travelInfo={destination} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;