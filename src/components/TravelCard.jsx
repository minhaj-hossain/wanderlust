import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export default function TravelCard({ travelInfo }) {

    return (
        <div className=" rounded-2xl overflow-hidden shadow-lg bg-white font-sans">
            {/* Image Section */}
            <div className="relative">
                <Image
                    src={travelInfo.imageUrl}
                    alt='taj'
                    width={500}
                    height={300}
                    className="w-full h-55 object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg flex items-center gap-1 shadow">
                    <span className="text-sm font-semibold">4.5</span>
                    <span className="text-yellow-500">★</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Location */}
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin size={16} />
                    <span>{travelInfo.country}</span>
                </div>

                {/* Title + Price */}
                <div className="flex justify-between items-start mt-2">
                    <h2 className="text-xl font-bold text-gray-800">{travelInfo.destinationName}</h2>
                    <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">${travelInfo.price}</p>
                        <p className="text-xs text-gray-500">/Person</p>
                    </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                    <Calendar size={16} />
                    <span>{travelInfo.duration}</span>
                </div>

                {/* Button */}
                <div className="mt-4">
                    <Link href={`/destinations/${travelInfo._id}`}>
                        <button className="w-full py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                            BOOK NOW ↗
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    );
}