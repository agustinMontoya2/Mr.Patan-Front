import Image from "next/image";

export const Navbar: React.FC = () => {
    return (
        <div className="w-screen h-[8%] bg-[#7600F5] flex flex-row items-center justify-between px-4">
            <div className="flex flex-row items-center justify-between h-4/5 w-[220px]">
                <Image src="/iconCross.svg" alt="Logo" width={50} height={50} />
                <h1 className="font-carterOne text-4xl text-[#F5F500] font-semibold">Mr.Patan</h1>
            </div>
            <div className=""></div>
        </div>
    )
};