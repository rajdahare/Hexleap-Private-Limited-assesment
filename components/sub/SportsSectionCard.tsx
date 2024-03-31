import Image from "next/image";

interface SportSectionCardProps {
    image: string;
    name: string;
    events: number;
    sport: string;
}


const SportsSectionCard = ({ image, name, events, sport }: SportSectionCardProps) => {
    return (
        <div className="p-4 bg-[#FFFFFF] dark:bg-[#3B3E47] drop-shadow-2xl">
            <Image src={image} height={385} width={218} alt={name} className="object-cover w-full h-auto" />
            <h3 className="text-base mt-3 font-medium">{name}</h3>
            <div className="flex justify-between mt-4 p-3 bg-[#F7F7F8] dark:bg-[#292B32]">
                <div>
                    <p className="text-xs font-normal">Total Events</p>
                    <p className="text-sm font-medium">{events} Events</p>
                </div>
                <div>
                    <p className="text-xs font-normal">Sport</p>
                    <p className="text-sm font-medium">{sport}</p>
                </div>
            </div>
        </div>
    )
}

export default SportsSectionCard