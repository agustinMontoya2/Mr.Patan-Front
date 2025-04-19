import { IInputDate} from "@/interfaces/input";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react"

export const InputDate: React.FC<IInputDate> = ({setDate, min, max, sundayDisabled, placeholder}) => {
    const [isOpen , setIsOpen] = useState(false)
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const firstDayOfMonth = new Date (year, month, 1).getDay() // lunes = [6]
    const daysInMonth = new Date (year, month + 1, 0).getDate()
    const daysArray = Array.from({length: daysInMonth}, (_,i) => i++)
    
    const [selectedDate, setSelectedDate] = useState(placeholder ? placeholder : new Date())

    const minDate = new Date()
    if (min) minDate.setDate(minDate.getDate() - (min * 7))
    if (min === 0) minDate.setDate(minDate.getDate() - 1)
      console.log(minDate.getDate());
      
    if(min === undefined) minDate.setFullYear(minDate.getFullYear() - 20)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const maxDate = new Date()
    if (max) maxDate.setDate(maxDate.getDate() + (max * 7))
    if (max === 0) maxDate.setDate(maxDate.getDate())
    if(max === undefined) maxDate.setDate(maxDate.getDate() + (100 * 7))

      const tempDate = new Date(minDate)
      const selectOptions = []
      //consume muchos recursos
      do {
        selectOptions.push(new Date(tempDate))
        tempDate.setFullYear(tempDate.getFullYear() + 1);
      } while (tempDate <= maxDate)
    
    const handleSelectDate = (year: number, month: number, day: number) => {
        setSelectedDate(new Date(year, month, day))
        setDate(new Date(year, month, day))
        
        setTimeout(() => {
            setIsOpen(false)
        }, 400);
    }
    const handleNextMonth = ()=> {
        if (year >= maxDate.getFullYear() && month >= maxDate.getMonth()) {
            return
        }
        if (month === 11 ) {
            setMonth(0)
            setYear(year + 1)
            return
        }
        setMonth(month + 1)
    }
    const handlePrevMonth = ()=> {
        if (year <= minDate.getFullYear() && month <= minDate.getMonth()) {
            return
        }
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
            return
        }
        setMonth(month - 1)
    }
    const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(parseInt(e.target.value))
    }
    return (
        <div className="relative w-full">
      {/* Botón para abrir el calendario */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="border bg-white px-4 py-2 rounded-md flex items-center justify-start gap-4 w-full active:border-blue-500 transition-all duration-300"
      >
        <Calendar size={18} />
        {selectedDate.toLocaleDateString()}
      </button>

      {/* Menú desplegable del calendario */}
      {isOpen && (
        <div className="absolute left-0 w-full mt-2 w-80 bg-white shadow-lg rounded-xl p-2 ssm:p-4 z-10 border border-blue-500">
          <div className="flex justify-between items-center">
            <ChevronLeft size={20} className="cursor-pointer" onClick={handlePrevMonth} />
            <div className="flex flex-row items-center gap-2">
            <h2>{months[month]}</h2>
            <select name="" id="" value={year} onChange={handleChangeYear}>
                {
                    selectOptions.map((option, index) => (
                        <option key={index} value={option.getFullYear()}>{option.getFullYear()}</option>
                    ))
                }
            </select>
            </div>
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
                const currentDate = new Date(year, month, day + 1);
                const isDisabled = currentDate < minDate || currentDate > maxDate;
                const isSunday = currentDate.getDay() === 0 && sundayDisabled;
                const isSelected = selectedDate.toDateString() === currentDate.toDateString();

              return (
                <div
                  key={day}
                  className={`p-2 rounded cursor-pointer transition w-full  ${
                    isDisabled || isSunday ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-200"
                  } ${isSelected ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => !isDisabled && !isSunday && handleSelectDate(year, month, day + 1)}
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