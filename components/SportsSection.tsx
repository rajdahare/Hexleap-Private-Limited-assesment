import React from 'react'
import Image from "next/image";
import Advertisement from './sub/Advertisement';
import SportsSectionCard from './sub/SportsSectionCard';
import { SPORTS } from '@/constants';
import { Button } from './ui/button';


const SportsSection = () => {
    return (
        <div className="container pt-8">
            <h2 className="text-2xl font-bold underline underline-offset-8 decoration-[#738FFF]">
                Sports
            </h2>
            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {SPORTS.map((sport) => (
                    <SportsSectionCard
                        key={sport.index}
                        image={sport.image}
                        name={sport.name}
                        events={sport.events}
                        sport={sport.sport}
                    />
                ))}

                <Advertisement />
            </div>
            <div className='flex w-full justify-center mt-10'>
                <Button className='p-5 text-white'>See More</Button>

            </div>
        </div>
    )
}

export default SportsSection