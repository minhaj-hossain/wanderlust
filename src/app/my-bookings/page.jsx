import MyBookingsCard from '@/components/MyBookingsCard';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage = async () => {

    const res = await fetch('http://localhost:5000/bookings')
    const data = await res.json()

    console.log(data)



    return (
        <div className='container mx-auto'>
            <h3 className='font-bold text-2xl'>My Bookings</h3>

            <div>
                {
                    data.map(myData => <MyBookingsCard key={myData._id} data={myData} />)
                }

            </div>

        </div>
    );
};

export default MyBookingsPage;