import { IPetData } from "@/interfaces/user"
import { Calendar, Weight } from "lucide-react"
import Image from "next/image"

export const PetData: React.FC<IPetData> = ({pet, medicalHistory, hairCuts}) => {
    return (
        <div className="flex flex-col w-full h-full gap-4">
                    <div className="w-full h-[25%] flex flex-row items-center gap-4 border-b border-solid border-[rgb(0,0,0)]">
                    <Image src={pet.image} alt="pet" width={100} height={100} style={{ width: "70px", height: "70px", objectFit: "cover"}} className="rounded-full"/>
                        <div className='flex flex-col items-start'>
                            <p className='font-bold font-kanit text-xl text-black'>{pet.name}</p>
                            <div className='flex flex-row items-center justify-between gap-1 font-kanit text-gray-500 text-sm'>
                                <div className="min-w-[50px]">
                                    <p className=''>{pet.breed}</p>
                                </div>
                                <div className="min-w-[50px]">
                                    <p className='text-center'>{pet.age} años</p>
                                </div>
                                <div className="min-w-[50px]">
                                    {pet.gender === "female" ? <p className='text-center'>Hembra</p> : <p className="text-center">Macho</p>}
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2 font-kanit text-black text-sm">
                                <Calendar size={20} /> {pet.birthdate}
                                <Weight size={20} /> {pet.weight} kg
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[30%] overflow-y-scroll flex flex-col gap-2 border-b border-solid border-[rgb(0,0,0)]">
                        <h2 className="font-semibold font-kanit text-lg text-black">Historial medico</h2>
                        {medicalHistory.map ((history, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 font-kanit text-black text-sm px-2">
                                
                                <div className="flex flex-row items-center justify-between w-full">
                                    <div>
                                        <p className="font-poppins">{history.description}</p>
                                        <p className="font-kanit text-gray-500 text-sm">Atendido por: {history.vet}</p>
                                    </div>
                                    <div>
                                        <p className="font-kanit font-semibold">{history.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-[30%] overflow-y-scroll flex flex-col gap-2">
                        <h2 className="font-semibold font-kanit text-lg text-black">Cortes de pelo</h2>
                        {hairCuts.map ((cut, index) => (
                            <div key={index} className="flex flex-row items-center gap-2 font-kanit text-black text-sm px-2">
                                
                            <div className="flex flex-row justify-between w-full">
                                <div>
                                    <p className="font-poppins">{cut.description}</p>
                                    <p className="font-kanit text-gray-500 text-sm">Atendido por: {cut.groomer}</p>
                                </div>
                                <div>
                                    <p className="font-kanit font-semibold">{cut.date}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
    )}