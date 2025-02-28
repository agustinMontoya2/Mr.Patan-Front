"use client";
import { getPets } from '@/helpers/users';
import { IUserPet } from '@/interfaces/user';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function UserPet() {
    const [pets, setPets] = useState<IUserPet[]>([]);

    const handleGetPets = async () => {
        const pets = await getPets();
        setPets(pets);
    }

    useEffect(() => {
        handleGetPets();
    }, [])
  return (
    <div className='flex flex-col items-center bg-whiteTransparent text-[rgb(0,0,0)] w-[80%] min-w-[275px] max-w-[800px] h-1/4 border-solid border-[rgb(0,0,0)] border-2 rounded-2xl'>
        {
            pets && pets.map((pet, index) => (
                <div key={index} className='flex flex-row items-center justify-between h-1/4 min-h-1/4 w-[80%] border-b border-gray-300 py-2'>
                    
                    <p className='text-center flex-1'>{pet.name}</p>
                    {pet.image ? (
                        <Image style={{ width: "40px", height: "40px", objectFit: "cover"}} src={pet.image} alt="pet" width={40} height={40} className='rounded-full' />
                    ) : (
                        <Image src="/iconPet.svg" alt="pet" width={40} height={40} />
                    )}
                    
                </div>
            )) 
        }
        <button className='bg-gray-100 text-gray-500 flex flex-row items-center justify-center h-1/4 min-h-1/4 w-full border-b border-gray-300 rounded-2xl hover:bg-gray-200 active:bg-gray-300 transition'>
  <p className='flex items-center gap-2 underline'>
    <Plus size={20} /> Agregar mascota
  </p>
</button>
    </div>
  )
}

export default UserPet