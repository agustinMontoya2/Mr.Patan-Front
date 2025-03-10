import { IInputDate} from "@/interfaces/input";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react"

export const InputDate: React.FC<IInputDate> = ({setDate, }) => {
    const [isOpen , setIsOpen] = useState(false)
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const firstDayOfMonth = new Date (year, month, 1).getDay() // lunes = [6]
    const daysInMonth = new Date (year, month + 1, 0).getDate()
    const daysArray = Array.from({length: daysInMonth}, (_,i) => i++)
    
    const [selectedDate, setSelectedDate] = useState(new Date())

    const today = new Date()
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 15)
    
    const handleSelectDate = (year: number, month: number, day: number) => {
        setSelectedDate(new Date(year, month, day))
        setDate(new Date(year, month, day))
        console.log(new Date (year, month, day));
        setIsOpen(false)
    }
    const handleNextMonth = ()=> {
        if (month >= new Date().getMonth() + 1){
            // return
        }
        if (month === 11 ) {
            setMonth(0)
            setYear(year + 1)
            return
        }
        setMonth(month + 1)
    }
    const handlePrevMonth = ()=> {
        if (month <= new Date().getMonth() - 1) {
            // return
        }
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
            return
        }
        setMonth(month - 1)
    }
    return (
        <div className="relative w-full">
      {/* Botón para abrir el calendario */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border px-4 py-2 rounded-md flex items-center justify-start gap-4 w-full active:border-blue-500 transition-all duration-300"
      >
        <Calendar size={18} />
        {selectedDate.toLocaleDateString()}
      </button>

      {/* Menú desplegable del calendario */}
      {isOpen && (
        <div className="absolute left-0 w-full mt-2 w-80 bg-white shadow-lg rounded-xl p-2 ssm:p-4 z-10 border border-blue-500">
          <div className="flex justify-between items-center">
            <ChevronLeft size={20} className="cursor-pointer" onClick={handlePrevMonth} />
            <h2>{months[month]} {year}</h2>
            <ChevronRight size={20} className="cursor-pointer" onClick={handleNextMonth} />
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mt-2 text-xs ssm:text-sm">
            <div className="font-bold">Lun</div>
            <div className="font-bold">Mar</div>
            <div className="font-bold">Mié</div>
            <div className="font-bold">Jue</div>
            <div className="font-bold">Vie</div>
            <div className="font-bold">Sáb</div>
            <div className="font-bold">Dom</div>

            {/* Días vacíos antes del primer día */}
            {Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }).map((_, i) => (
              <div key={`empty-${i}`} className="text-gray-300">{""}</div>
            ))}

            {/* Días del mes */}
            {daysArray.map((day) => {
              const currentDate = new Date(year, month, day);
              const isDisabled = currentDate < today || currentDate > maxDate;
              const isSelected = selectedDate.toDateString() === currentDate.toDateString();

              return (
                <div
                  key={day}
                  className={`p-2 rounded cursor-pointer transition ${
                    isDisabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-200"
                  } ${isSelected ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => !isDisabled && handleSelectDate(year, month, day)}
                >
                  {day + 1}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};