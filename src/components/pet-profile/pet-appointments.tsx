import { IUserPet, IUserPetAppointment } from "@/interfaces/user"
import { Calendar, Clock, ScanHeart, Scissors, ShowerHead } from "lucide-react";
import React, { useState } from "react"
import { PetAppointmentForm } from "./pet-appointment-form";
import { notifyToast } from "@/helpers/notify/notifyToast";

export const PetAppointments: React.FC <{pet: IUserPet}> = ({pet}) => {
    const [appointments, setAppointments] = useState<IUserPetAppointment[]>(pet.appointment);
    const [addAppointment, setAddAppointment] = useState(false);
    
    const handleCancel = (appointment: IUserPetAppointment) => {
        const newAppointments = pet.appointment.map((a) => a.id === appointment.id ? {...a, status: "cancelado"} : a);
        pet.appointment = newAppointments;
        setAppointments(newAppointments);
        const pets: IUserPet[] = localStorage.getItem("pets") ? JSON.parse(localStorage.getItem("pets") as string) : [];
        const updatedPets =pets.map((p: IUserPet) => p.id === pet.id ? {...p, appointment: newAppointments} : p);
        localStorage.setItem("pets", JSON.stringify(updatedPets));
        
    }
    const sortedAppointments = appointments.sort((a, b) => {
        const [hourA, minuteA] = a.time.split(':').map(Number);
        const [hourB, minuteB] = b.time.split(':').map(Number);
        return (hourA * 60 + minuteA) - (hourB * 60 + minuteB);
    })
    const sortedAppointmentsDate = sortedAppointments.sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split('/').map(Number);
        const [dayB, monthB, yearB] = b.date.split('/').map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return dateB.getTime() - dateA.getTime();
    });
    
    return <div className="w-full h-full items-center flex flex-col justify-center">
        <div className="w-full h-full flex flex-col">
            <div className="h-[85%] overflow-y-scroll flex flex-col gap-6 sm:gap-2">
                        {sortedAppointmentsDate.map ((appointment, index) => (
                            <div key={index} className="flex flex-row items-center justify-center gap-2 font-kanit text-black text-sm">
                                
                                <div className="flex flex-row items-center justify-between w-full">
                                    <div className="flex flex-row items-center gap-4">
                                        {appointment.type === "consulta" && <ScanHeart size={20} />}
                                        {appointment.type === "corte" && <Scissors size={20} />}
                                        {appointment.type === "corte y baño" && <Scissors size={20} />}
                                        {appointment.type === "baño" && <ShowerHead size={20} />}
                                        <div>
                                            <p className="font-kanit text-lg">{appointment.type}</p>
                                            <div className="flex flex-row gap-2">
                                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                                    <Calendar size={16} />
                                                    <p className="font-kanit text-gray-500 text-md">{appointment.date}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                                    <Clock size={16} />
                                                    <p className="font-kanit text-gray-500 text-md">{appointment.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2  items-center justify-start w-[200px]">
                                        <div className={`w-[90px] flex flex-row items-center justify-center text-black px-2 py-1 rounded-md ${appointment.status === "cancelado" ? "bg-red-500/90" : appointment.status === "pendiente" ? "bg-yellow-400/70" : "bg-green-400/70"}`}>
                                            {appointment.status}
                                        </div>
                                        <div className="w-[90px]">
                                            {appointment.status !== "cancelado" && <button onClick={() => notifyToast.confirmButton(() => handleCancel(appointment), "¿Deseas cancelar el turno?")} className="w-full sm:ml-2 flex flex-row items-center justify-center text-black px-2 py-1 rounded-md bg-red-600 transition-all duration-300 active:scale-90">Cancelar</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="h-[9%] w-full flex flex-row items-center justify-center">
                        <button onClick={() => setAddAppointment(true)} className="h-8 flex flex-row items-center justify-center bg-blue-500 text-white font-kanit text-lg px-4 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-500 transition-all duration-300 active:scale-95">
                        Agendar turno
                        </button>
                        </div>
                    </div>
                        {addAppointment &&  <PetAppointmentForm setAddAppointment={setAddAppointment} setAppointments={setAppointments} appointments={appointments} pet={pet}/>}
    </div>
}