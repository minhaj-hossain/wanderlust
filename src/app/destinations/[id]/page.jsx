import React from "react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import {
    MapPin,
    Star,
    Calendar,

    Check,
    Edit3,
    Trash2,
    ChevronRight,
    ArrowLeftCircle
} from "lucide-react";
import { EditModals } from "@/components/EditModals";
import { DeleteButton } from "@/components/DeleteButton";
import BookingCard from "@/components/BookingCard";


const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const travelDetails = await res.json();

    const highlights = [
        "Luxury beachfront accommodation",
        "Traditional Balinese spa treatment",
        "Sunrise trek to Mount Batur",
        "Visit Uluwatu Temple at sunset",
        "Private beach dinner experience",
    ];

    return (
        <div>
            <div className="max-w-6xl mx-auto p-4 md:p-8 font-sans text-slate-700">
                {/* Top Navigation Bar */}
                <div className="flex justify-between items-center mb-6">
                    <Button
                        variant="light"
                        startContent={<ArrowLeftCircle size={18} />}
                        className="text-slate-500 font-medium"
                    >
                        Back to Destinations
                    </Button>
                    <div className="flex gap-3">
                        <EditModals travelDetails={travelDetails} />
                        <DeleteButton travelDetails={travelDetails} />
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full h-[300 md:h-112.5 rounded-2xl overflow-hidden mb-8 shadow-sm">
                    <Image
                        src={travelDetails.imageUrl}
                        alt={travelDetails.destinationName}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="space-y-4">
                            <div className="flex items-center gap-1 text-slate-500 text-sm">
                                <MapPin size={16} />
                                <span>{travelDetails.country}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{travelDetails.destinationName}</h1>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Star className="text-green-600 fill-green-600" size={18} />
                                    <span className="font-bold text-slate-900 text-lg">4.9</span>
                                    <span className="text-slate-500">(234 reviews)</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Calendar size={18} />
                                    <span className="font-medium">{travelDetails.duration}</span>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 w-fit border-slate-200">
                                Overview
                            </h2>
                            <p className="leading-relaxed text-slate-600">
                                {travelDetails.description}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900">Highlights</h2>
                            <p className="text-slate-600">
                                Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture.
                                Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                                {highlights.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="bg-green-100 p-1 rounded-full">
                                            <Check size={14} className="text-green-600" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar - Booking Card */}
                    <div className="lg:col-span-1">
                        <BookingCard travelDetails={travelDetails} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;