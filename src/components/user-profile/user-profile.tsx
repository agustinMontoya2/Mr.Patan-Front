"use client";
import { getUsers } from '@/helpers/users';
import { IUser } from '@/interfaces/user';
import { SquarePen } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import Input from '../input/input';

function UserProfile() {
    const [user, setUser] = useState<IUser>();
    const [editingField, setEditingField] = useState<"username" | "email" | null>(null);
    const [tempValue, setTempValue] = useState("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();
    const handleGetUser = async () => {
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
        if (!user) {
        router.push("/inicio");
        }
        setUser(user);
    }

    const handleEditField = (field: "username" | "email") => {
        setEditingField(field);
        setTempValue(user ? user[field] : "");
    };

    const handleSaveField = () => {
        if (!user) return;

        const updatedUser = { ...user, [editingField as string]: tempValue };

        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setEditingField(null);
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    
    

    const file = e.target.files[0];
    const reader = new FileReader();
    

    reader.onloadend = () => {
        const newUser = { ...user, image: reader.result as string };
        localStorage.setItem("user", JSON.stringify(newUser));
        handleGetUser();
    };
    reader.readAsDataURL(file);

    
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
                        {editingField === "username" ? (
                            <input
                                name="username"
                                type="text"
                                value={tempValue}
                                onChange={(e) => setTempValue(e.target.value)}
                                onBlur={handleSaveField}
                                onKeyDown={(e) => e.key === "Enter" && handleSaveField()}
                                autoFocus
                                className='border border-gray-400 p-1 rounded w-2/3'
                            />
                        )
                        : (
                    <p className='mr-4'>{user.username}</p>
                )}
                    <SquarePen size={20} onClick={() => handleEditField("username")} className='cursor-pointer'/>
                    </div>
                    <div className='flex flex-row items-center'>
                        {
                            editingField === "email" ? (
                                <input
                                    name="email"
                                    type="text"
                                    value={tempValue}
                                    onChange={(e) => setTempValue(e.target.value)}
                                    onBlur={handleSaveField}
                                    onKeyDown={(e) => e.key === "Enter" && handleSaveField()}
                                    autoFocus
                                    className='border border-gray-400 p-1 rounded w-2/3'
                                />
                            )
                            : (
                                <p className='mr-4'>{user.email}</p>
                            )
                        }
                    <SquarePen size={20} onClick={() => handleEditField("email")} className='cursor-pointer' />
                    </div>
                    </div>
                    <div className='w-1/3 min-w-[120px] h-full flex flex-col items-center justify-center group'>
                    <Image
                            src={user.image || "/iconProfile.svg"}
                            alt="user"
                            width={120}
                            height={120}
                            className="rounded-full cursor-pointer group-hover:brightness-50 max-w-[120px] max-h-[120px] min-w-[120px] min-h-[120px] object-cover"
                            onClick={() => fileInputRef.current?.click()}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                        <SquarePen size={20} className='absolute opacity-0 group-hover:opacity-100'/>
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