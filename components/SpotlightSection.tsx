import React from 'react'
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SpotlightCard from './sub/SpotlightCard';
import { TICKETS } from '@/constants';

const SpotlightSection = () => {
    return (
        <div className="container mt-7 pb-10">
            <div className="lg:m-1 p-6 pt-20 lg:p-20 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C]">
                <h2 className="text-5xl font-bold text-center">Collection Spotlight</h2>
                <p className="mt-8 font-normal text-sm text-center lg:px-[120px]">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

                <div className="relative lg:flex lg:justify-center lg:items-center lg:w-full lg:px-36">
                    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {TICKETS.map((ticket) => (
                            <SpotlightCard
                                key={ticket.index}
                                image={ticket.image}
                                place={ticket.place}
                                time={ticket.time}
                                address={ticket.address}
                                buttontext={ticket.buttonText}
                            />

                        ))}
                    </div>
                    {/* Buttons for navigation */}
                    <Button className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-6 bg-transparent rounded-none border border-[#2C9CF0] hover:bg-transparent">
                        <ChevronLeft color="#2C9CF0" />
                    </Button>

                    <Button className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-6 bg-transparent rounded-none border border-[#2C9CF0] hover:bg-transparent"><ChevronRight color="#2C9CF0" /> </Button>
                </div>

            </div>
        </div>
    )
}

export default SpotlightSection