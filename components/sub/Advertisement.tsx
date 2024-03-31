import Image from "next/image";


const Advertisement = () => {
    return (
        <div className="p-4 flex-1 bg-[#FFFFFF] dark:bg-[#3B3E47]   drop-shadow-2xl">
            <div className="relative border-[#006555] border">
                <p className="absolute right-0 bg-black py-1 px-5 text-white">Ad</p>
                <Image src="/Ad.png" height={218} width={218} alt="ad" className="object-cover w-full h-auto" />
                <h3 className="text-xl mt-10 font-semibold text-center">Advertisement Title</h3>
                <div className="mt-3 p-3">
                    <p className="text-xs leading-5 font-normal text-wrap pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default Advertisement