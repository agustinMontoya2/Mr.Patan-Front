"use client"
import React, { useEffect } from 'react'
import { User } from '@/components/user-profile/user'
import { IUser } from '@/interfaces/user'
import { useRouter } from 'next/navigation'
import { UserData } from './user-data'
export const UserConteiner = () => {
    const [user, setUser] = React.useState<IUser | null>(null);

    const router = useRouter();
    const handleGetUser = async () => {
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
        setUser(user);
    }

    useEffect(() => {
        handleGetUser();
    }, [router])
    return (
        <div className='h-[80%] w-[90%] flex flex-col items-center justify-between'>
            <h1 className='text-3xl font-kanit text-black font-bold'>Tu perfil</h1>
            {
            user ? (
            <div className='w-full h-[80%] flex flex-col lg:flex-row items-center justify-between'>
    <User user={user} handleGetUser={handleGetUser}/>
    <UserData user={user} setUser={setUser} />
  </div>
    ) : (
        <h1 className='text-3xl font-kanit text-black font-bold'>No hay un usuario logueado</h1>
    )
  }
  
  </div>
    )
}