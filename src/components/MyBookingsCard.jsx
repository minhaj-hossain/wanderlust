'use client'

import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyBookingsCard = ({ data }) => {
    const { imageUrl, _id, departureDate, destinationName, userImage, username, price, country, destinationId } = data


    const formattedDate = new Date(departureDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'DELETE',
        })
        const result = await res.json()
    }


    return (
        <Card>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${price}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                    {/* Country & Destination */}
                    <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{destinationName}</h3>
                        <p className="text-gray-500 text-sm">{country}</p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span>{formattedDate}</span>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src={userImage}
                                    alt={username}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{username}</span>
                        </div>

                        {/* Book Now Button */}
                        <div className='space-x-4'>
                            <button onClick={handleDelete} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                                Cancel
                            </button>

                            <Link href={`/destinations/${destinationId}`}>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                                    View Details
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default MyBookingsCard;