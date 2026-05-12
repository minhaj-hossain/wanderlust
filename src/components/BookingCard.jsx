'use client'

import { authClient } from '@/lib/auth-clients';
import { ChevronRight } from '@gravity-ui/icons';
import { Button, Card, DateField, Description, FieldError, Label } from '@heroui/react';
import { Check } from 'lucide-react';
import React, { useState } from 'react';

const BookingCard = ({ travelDetails }) => {

    const [value, setValue] = useState(null)
    console.log(new Date(value))

    const { data: session } = authClient.useSession()
    const user = session?.user

    const handleBookings = async () => {
        const bookingsData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: travelDetails._id,
            destinationName: travelDetails.destinationName,
            price: travelDetails.price,
            imageUrl: travelDetails.imageUrl,
            country: travelDetails.country,
            departureDate: new Date(value)

        }

        const res = await fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingsData)
        })
        const result = await res.json()
    }

    return (
        <Card className="p-6 border-none shadow-xl bg-white sticky top-8">
            <div className="space-y-6">
                <div>
                    <p className="text-slate-500 text-sm mb-1">Starting from</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-cyan-500">${travelDetails.price}</span>
                        <span className="text-slate-400 text-sm">per person</span>
                    </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <DateField onChange={setValue} className="w-[256px]" name="date">
                        <Label>Departure Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>
                </div>

                <Button
                    onClick={handleBookings}
                    size="lg"
                    className="w-full bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-200"
                    endContent={<ChevronRight size={18} />}
                >
                    Book Now
                </Button>

                <div className="space-y-3 pt-2">
                    {[
                        "Free cancellation up to 7 days",
                        "Travel insurance included",
                        "24/7 customer support"
                    ].map((perk, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-600">
                            <Check size={16} className="text-green-500" strokeWidth={2.5} />
                            <span className="text-xs font-medium">{perk}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default BookingCard;