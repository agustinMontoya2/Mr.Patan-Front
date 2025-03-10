
import { IPetAppointmentForm } from "@/interfaces/menu"
import { IUserPet, IUserPetAppointment } from "@/interfaces/user"
import { X } from "lucide-react"
import { useState } from "react";
import { InputDate } from "../input/input-date";

export const PetAppointmentForm: React.FC<IPetAppointmentForm> = ({appointments , pet,setAddAppointment, setAppointments}) => {
    const visualizerAppointment: IUserPetAppointment = {
        id: 0, date: "", time: "", status: "", type: ""};
    const [appointmentData, setAppointmentData] = useState<IUserPetAppointment>(visualizerAppointment);
    const [isSaturday, setIsSaturday] = useState(false);

    const appointmentHoursMorning = [
        "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00"]
    const appointmentHoursAfternoon = [ "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"]
    const sundayAppointmentHours = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"]

    const types = ["Consulta", "Corte", "Baño", "Corte y Baño"]
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAppointmentData({ ...appointmentData, [name]: value.toLowerCase() });
    }
    const handleChangeDate = (selectedDate: Date) => {
        setIsSaturday(selectedDate.getDay() === 6);
        const formattedDate = selectedDate.toISOString().split("T")[0].split("-").reverse().join("/");
        setAppointmentData({ ...appointmentData, date: formattedDate });
    }

    const handleSubmit = () => {
      if (appointmentData.date === "" || appointmentData.time === "" || appointmentData.type === "") {
        alert("Todos los campos son obligatorios");
        return;
      }
      const newAppointment = { ...appointmentData, id: Math.floor(Math.random() * 1000), status: "pendiente" };
      const newAppointments = [...appointments, newAppointment];
      setAppointments(newAppointments);
      const pets = localStorage.getItem("pets") ? JSON.parse(localStorage.getItem("pets") as string) : [];
      const updatedPets = pets.map((p: IUserPet) => p.id === pet.id ? { ...p, appointment: newAppointments } : p);
      localStorage.setItem("pets", JSON.stringify(updatedPets));
      setAddAppointment(false);
    }

    
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4">
        <X onClick={() => setAddAppointment(false)} size={32}
        className="absolute top-2 right-5 cursor-pointer text-gray-700 hover:text-gray-900 transition"/>

        <div className="h-full flex flex-col justify-between text-black">
          
          <label className="block text-2xl font-kanit">Fecha</label>
          <InputDate setDate={handleChangeDate} />
          
          <label className="block text-2xl font-kanit">Hora</label>
          <select
            name="time"
            onChange={handleChangeSelect}
            value={appointmentData.time}
            className="border border-gray-300 rounded-lg w-full p-3 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" className="text-gray-400">Seleccionar horario</option>
        
            {/* Horarios de la semana */}
            {!isSaturday && (
              <>
                <optgroup label="Mañana">
                  {appointmentHoursMorning.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </optgroup>
                <optgroup label="Tarde">
                  {appointmentHoursAfternoon.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </optgroup>
              </>
            )}
    
            {/* Horarios del domingo */}
            {isSaturday && (
              <optgroup label="Mañana">
                {sundayAppointmentHours.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </optgroup>
            )}
          </select>
          
          {/* Asunto */}
          <label className="block text-2xl font-kanit">Asunto</label>
          <select
            name="type"
            onChange={handleChangeSelect}
            className="border border-gray-300 rounded-lg w-full p-3 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Seleccionar Asunto</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          {/* Botón Guardar */}
          <button 
            onClick={() => handleSubmit()}
            className="w-full h-8 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
)}