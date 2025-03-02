"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ServicesMobile } from "../mobile/services/services-mobile";
import { usePathname, useRouter } from "next/navigation";
import { MenuBurger } from "../menu/menu";

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
    }
    const isLogin = pathname === "/inicio";
    const isRegister = pathname === "/registro";
    
    return (
        <div className="w-screen h-20 max-h-[68px] bg-[#7600F5] flex flex-row items-center justify-between px-4">
            <div onClick={() => router.push("/perfil")} className="flex flex-row items-center justify-between h-4/5 w-[220px] cursor-pointer">
                <Image src="/iconCross.svg" alt="Logo" width={50} height={50} />
                <h1 className="font-carterOne text-4xl text-[#F5F500] font-semibold">Mr.Patan</h1>
            </div>
            <div className="">
                
                <button onClick={() => toggleMenu()} className="top-5 right-4 flex flex-row items-center z-50">
                    
                    {
                        !isRegister && !menuOpen && 
                        <div className="sm:hidden">
                        <Menu size={32} color="white" />
                        </div>
                    }
                </button>
                {
                    !isLogin && !isRegister ?
                    <MenuBurger menuOpen={menuOpen} toggleMenu={() => toggleMenu()} /> :
                    <ServicesMobile menuOpen={menuOpen} toggleMenu={() => toggleMenu()} />

                }
            </div>
                
        </div>
    )
};