import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SpotlightCardProps {
    image: string;
    place: string;
    time: string;
    address: string;
    buttontext: string;
}

const SpotlightCard = ({ image, place, time, address, buttontext }: SpotlightCardProps) => {
    return (
        <div className="p-4 bg-[#FFFFFF] dark:bg-[#3B3E47] overflow-hidden drop-shadow-2xl">
            <Image src={image} height={401} width={226} alt={address} className="object-cover w-full h-auto" />
            <div className="relative">
                <div className="absolute p-4 z-10 left-[-30px] bottom-[-50px] rounded-full bg-[#EBEBF1] dark:bg-[#221A2C] " />
                <div className="absolute p-4 z-10 right-[-30px] bottom-[-50px] rounded-full bg-[#EBEBF1] dark:bg-[#221A2C]" />
                <div className="absolute w-full border-dashed border-[1px] border-[#A9ACB2] bottom-[-35px]" />
            </div>
            <h3 className="text-base font-medium text-center mt-16">{place}</h3>
            <p className="text-center text-sm font-normal mt-2">{time}</p>
            <p className="text-center text-sm font-normal mt-2">{address}</p>
            <div className="flex justify-center">
                <Button className="bg-black text-white mt-5 w-full rounded-none">{buttontext}</Button>
            </div>
        </div>
    )
}

export default SpotlightCard