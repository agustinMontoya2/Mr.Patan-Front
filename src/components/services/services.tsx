import Image from "next/image";
import React from "react";

export const Services: React.FC = () => {
    const services = [
        {title: "Consultorio"},
        {title: "Cirugia"},
        {title: "Analisis Clinicos"},
        {title: "Cardiologia / Ecografias"},
        {title: "Medicamentos"},
        {title: "Baño y peluqueria"},
    ]

    return (
    <div className="bg-whiteTransparent text-[rgb(0,0,0)] min-w-[270px] w-[40%] max-w-[400px] h-[75%] hidden sm:flex items-center flex-col justify-around border-solid border-[rgb(0,0,0)] border-2 rounded-2xl">{
        services.map((service, index) => (
            <div key={index} className="flex flex-row w-[95%]">
                <Image src="/iconPet.svg" alt="patita" width={24} height={6} className="mx-2" />
            <h2 className="text-3xl font-kanit">{service.title}</h2>
            </div>
        ))
    }</div>
)
};