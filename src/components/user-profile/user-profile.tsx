"use client";
import { getUsers } from '@/helpers/users';
import { IUser } from '@/interfaces/user';
import { SquarePen } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function UserProfile() {
    const [user, setUser] = useState<IUser>();
    const handleGetUser = async () => {
        const user = await getUsers();
        setUser(user);
    }

    useEffect(() => {
        handleGetUser();
    }, [])
  return (
    <div className='flex flex-col items-center justify-center bg-whiteTransparent text-2xl font-kanit text-[rgb(0,0,0)] w-[80%] min-w-[275px] max-w-[800px] h-1/4 border-solid border-[rgb(0,0,0)] border-2 rounded-2xl'>
        {
            user ? (
                <div className=' flex flex-col-reverse sm:flex-row items-center justify-center h-3/4 w-[70%]'>
                    <div className='flex flex-col items-center sm:items-start justify-around w-2/3 h-2/3'>
                    <div className='flex flex-row items-center'>
                    <p className='mr-4'>{user.username}</p>
                    <SquarePen size={20} />
                    </div>
                    <div className='flex flex-row items-center'>
                    <p className='mr-4'>{user.email}</p>
                    <SquarePen size={20} />
                    </div>
                    </div>
                    <div className='w-1/3 min-w-[120px] h-full flex flex-col items-center justify-center'>
                    {user.image ? (
                        <Image src={user.image} alt={user.name} />
                    ) : (
                        <Image src="/iconProfile.svg" alt="user" width={120} height={120} />)}
                        </div>
                        </div>
            ) : (
                <div>usuario no encontrado</div>
            )
            
            
        }
    </div>
  )
}

export default UserProfile