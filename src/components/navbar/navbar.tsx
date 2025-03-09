"use client";
import { Menu, ShoppingCart } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { ServicesMobile } from "../mobile/services/services-mobile";
import { usePathname } from "next/navigation";
import { MenuBurger } from "../menu/menu";
import { INavbar } from "@/interfaces/menu";
import { CartContext } from "@/context/cart";
import Link from "next/link";

export const Navbar: React.FC<INavbar> = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null); 

    const cartContext = useContext(CartContext);
    const cart = cartContext.cart
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const isLogin = pathname === "/inicio";
    const isRegister = pathname === "/registro";

    const handleCart = cartContext.handleGetCart
    
    

    useEffect(() => {
        handleCart()
        
    }, [])

    useEffect(() => {
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
        <div className="w-screen min-h-[68px] h-20 max-h-[68px] bg-[#7600F5] flex flex-row items-center justify-between px-4">
            <Link
            href="/perfil"
            passHref
            className="w-1/3 flex flex-row "
            >
            <div className="flex flex-row items-center justify-centerh-4/5 w-[220px] cursor-pointer">
                <h1 className="font-carterOne text-3xl text-[#F5F500] font-semibold">Mr.Patan</h1>
            </div>
            </Link>
            <div className="flex flex-row items-center gap-6">
                { !isLogin && !isRegister && 
                <Link href="/perfil/carrito" passHref>
                <div className="flex flex-row-reverse items-center gap-2">
                <ShoppingCart size={28} color="white" /> 
                <p className="text-white text-xl font-kanit">{cart.length}</p>
                </div>
                </Link>
                }
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
        </div>
    )
};