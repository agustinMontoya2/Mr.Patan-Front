"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ServicesMobile } from "../mobile/services/services-mobile";

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
        
    }
    return (
        <div className="w-screen h-20 max-h-[68px] bg-[#7600F5] flex flex-row items-center justify-between px-4">
            <div className="flex flex-row items-center justify-between h-4/5 w-[220px]">
                <Image src="/iconCross.svg" alt="Logo" width={50} height={50} />
                <h1 className="font-carterOne text-4xl text-[#F5F500] font-semibold">Mr.Patan</h1>
            </div>
            <div className="">
                <button onClick={() => toggleMenu()} className="fixed top-5 right-4 sm:hidden flex flex-row items-center z-50">
                    
                    {
                        !menuOpen && <Menu size={32} color="white" />
                    }
                </button>
                <ServicesMobile menuOpen={menuOpen} toggleMenu={() => toggleMenu()} />
                
            </div>
        </div>
    )
};