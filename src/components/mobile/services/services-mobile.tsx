import { IMenuItem } from "@/interfaces/menu"
import { X } from "lucide-react"
import Image from "next/image"

export const ServicesMobile: React.FC<IMenuItem> = ({menuOpen, toggleMenu}) => {
    const services = [
        {title: "Consultorio"},
        {title: "Cirugia"},
        {title: "Analisis Clinicos"},
        {title: "Cardiologia / Ecografias"},
        {title: "Medicamentos"},
        {title: "Baño y peluqueria"},
    ]
    return (
        <div className={`fixed top-0 right-0 z-40 bg-whiteTransparent text-[rgb(0,0,0)] w-[70%] h-screen flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
            <X onClick={() => toggleMenu()} size={32} color="black" className="absolute top-5 right-5" />
            <div className="flex flex-col h-[70%] w-full justify-around">
            {
                 services.map((service, index) => (
                            <div key={index} className="flex flex-row">
                                <Image src="/iconPet.svg" alt="patita" width={24} height={6} className="mx-2" />
                            <h2 className="text-3xl font-kanit">{service.title}</h2>
                            </div>
                        ))
            }
        </div>
        </div>
    )}