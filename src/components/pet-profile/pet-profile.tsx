"use client";
import { IUserPet } from "@/interfaces/user";
import { ArrowLeft} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PetData } from "./pet-data";
import { PetAppointments } from "./pet-appointments";

export const PetProfile = () => {
    const [pet, setPet] = useState<IUserPet | null>(null);
    const [medicalHistory, setMedicalHistory] = useState<{ date: string; description: string; vet: string }[]>([]);
    const [hairCuts, setHairCuts] = useState<{ date: string; description: string; groomer: string }[]>([]);
    const [selectedTab, setSelectedTab] = useState("data");

    const tabs = [
        { key: "data", label: "Información" },
        {key: "appointments", label: "Turnos"},
    ]

    const params = useParams();
    
    const id = params.id as string
    
    const handleGetPets = async () => {
        const pets: IUserPet[] =  localStorage.getItem("pets") ? JSON.parse(localStorage.getItem("pets") as string) : [];
        const pet = pets.find(pet => pet.id === parseInt(id));
        if (!pet) return
        setPet(pet);
        const sortedMedicalHistory = pet.medicalHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const sortedHairCuts = pet.hairCuts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setMedicalHistory(sortedMedicalHistory);
        setHairCuts(sortedHairCuts);
    }
    
    useEffect(() => {
        handleGetPets();
    }, [])
    
    return (
    <div className="h-[80%] min-w-[310px] w-[90%] bg-whiteTransparent border-2 border-solid border-[rgb(0,0,0)] rounded-2xl flex flex-row items-center justify-center">
        <div className="w-full h-full px-6">
            <div className="w-full h-[6%] flex flex-row items-center gap-2 border-b border-solid border-[rgb(0,0,0)]">
                <button className="flex flex-row items-center gap-2 h-[90%]
                rounded-xl hover:bg-gray-100 active:bg-gray-300 
                transition-all duration-200 active:scale-95 p-2 text-xs text-black">
                    <Link href="/perfil" className="flex flex-row items-center gap-2">
                <ArrowLeft size={20} />
                </Link>
                </button>
                {tabs.map((tab) => (
                <button key={tab.key} onClick={() => setSelectedTab(tab.key)}
                className={`flex flex-row items-center justify-center gap-2 h-[80%] min-w-[75px] w-[10%]
                rounded-md hover:bg-gray-100 active:bg-gray-300 
                transition-all duration-200 active:scale-95 p-2 text-xs text-black ${selectedTab === tab.key ? "bg-white" : "bg-gray-100/40"}`}>
                    {tab.label}
                </button>
                ))}
            </div>
        {pet && selectedTab === "data" && <PetData pet={pet} medicalHistory={medicalHistory} hairCuts={hairCuts}/>}
        {pet && selectedTab === "appointments" && <PetAppointments pet = {pet} />}
        {!pet && <div>Cargando...</div>}
        </div>
    </div>)
}