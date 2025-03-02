"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ServicesMobile } from "../mobile/services/services-mobile";
import { usePathname, useRouter } from "next/navigation";
import { MenuBurger } from "../menu/menu";

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null); 

    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
    }
    const isLogin = pathname === "/inicio";
    const isRegister = pathname === "/registro";

    useEffect(() => {
        console.log("click");
        
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [toggleMenu]);
    
    return (
        <div className="w-screen h-20 max-h-[68px] bg-[#7600F5] flex flex-row items-center justify-between px-4">
            <div onClick={() => router.push("/perfil")} className="flex flex-row items-center justify-between h-4/5 w-[220px] cursor-pointer">
                <Image src="/iconCross.svg" alt="Logo" width={50} height={50} />
                <h1 className="font-carterOne text-4xl text-[#F5F500] font-semibold">Mr.Patan</h1>
            </div>
            <div ref={menuRef} className="">
                
                <button onClick={() => toggleMenu()} className="top-5 right-4 flex flex-row items-center z-50">
                    

                    {
                        isLogin && !menuOpen && 
                        <div className="sm:hidden">
                        <Menu size={32} color="white" />
                        </div>
                    }
                    {
                        !isLogin && !isRegister && !menuOpen && 
                        <div className="">
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