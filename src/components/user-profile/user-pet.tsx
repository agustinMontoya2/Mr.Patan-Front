"use client";
import { notifyToast } from '@/helpers/notify/notifyToast';
import { IUserPet } from '@/interfaces/user';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export const UserPet: React.FC =() => {
    const router = useRouter()
    const [pets, setPets] = useState<IUserPet[]>([]);

    const handleGetPets = async () => {
        const pets: IUserPet[] = localStorage.getItem("pets") ? JSON.parse(localStorage.getItem("pets") as string) : [];
        setPets(pets);
    }

    const handleDeletePet = async (id: number) => {
        const petsFiltered = pets.filter(pet => pet.id !== id);
        setPets(petsFiltered);
        const audio = new Audio('/dog-whine.wav'); 
        await audio.play();
        localStorage.setItem("pets", JSON.stringify(petsFiltered));
    }

    useEffect(() => {
        handleGetPets();
    }, [])
  return (
    <div className='flex flex-col items-center bg-whiteTransparent text-[rgb(0,0,0)] w-full h-[80%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl'>
        <div className=' flex flex-col justify-start gap-6 h-full w-full px-6 py-2'>
        <div className='w-full h-[20%] flex flex-row items-center justify-between'>
        <h2 className='font-bold text-xl font-kanit'>Mis mascotas</h2>
        <button onClick={() => router.push("/registro/mascota")} className="flex flex-row items-center justify-center mr-4 w-[35%] max-w-[100px] ssm:max-w-[150px] h-full 
        border-b border-gray-300 rounded-2xl 
        bg-white shadow-md 
        hover:bg-gray-100 active:bg-gray-300 
        transition-all duration-200 active:scale-95 px-4 py-2 text-sm">
            <Link href="/registro/mascota" passHref>
        Agregar mascotas
        </Link>
        </button>
        </div>
        <div className='w-full h-[90%] flex flex-col items-center overflow-y-scroll'>
        {
            
            pets && pets.map((pet, index) => {
                const now = new Date()
                const birthdateDate = pet.birthdate.split("/")
                const birthdate = new Date(Number(birthdateDate[2]) , Number(birthdateDate[1]) - 1, Number(birthdateDate[0]))

                let year = now.getFullYear() - birthdate.getFullYear()
                let month = now.getMonth() - birthdate.getMonth()
                let day = now.getDate() - birthdate.getDate()

                if (day < 0) {
                    month--;
                    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                    day += lastMonth.getDate();
                }
                
                if (month < 0) {
                    year--;
                    month += 12;
                }
                return (
                    <div key={index} className='flex items-center justify-between h-[500x] w-full border-b border-gray-400 py-2 hover:bg-gray-200/40 cursor-pointer transition-all duration-300 rounded-lg'>
                    <Link key={index} passHref href={`/perfil/mascota/${pet.id}`} className='w-full h-full'>
                <div className='flex items-center gap-6'>
                    {pet.image ? (
                        <Image style={{ width: "40px", height: "40px", objectFit: "cover"}} src={pet.image} alt="pet" width={40} height={40} className='rounded-full' />
                    ) : (
                        <Image src="/iconPet.svg" alt="pet" width={40} height={40} />
                    )}
                    <div className='flex flex-col items-start'>
                    <p className='font-bold font-kanit text-lg'>{pet.name}</p>
                    <div className='flex flex-row items-center gap-2 font-kanit text-gray-500 text-sm ssm:text-base'>
                    <p className=''>{pet.breed}</p>
                    •
                    <p className=''>{year <= 0 ? `${month < 0 ? month * -1 : month} meses` : year <= 1 ? `${year} año` : `${year} años`}</p>
                    </div>
                    </div>
                    </div>
                    </Link>
                    <Trash2
                          size={20}
                          color="red"
                          className="transition-all duration-300 hover:scale-110 mr-2"
                          onClick={() => notifyToast.confirmButton(() => handleDeletePet(pet.id), `¿Deseas eliminar a ${pet.name}?`)}
                        />
                        
                </div>
            )}) 
        }
        
    </div>
    </div>
    </div>
  )
}
