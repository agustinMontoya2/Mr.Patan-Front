"use client";
import { IUser, IUserInformation } from '@/interfaces/user';
import { SquarePen } from 'lucide-react';
import React, {  useState } from 'react'

export const UserInformation: React.FC<IUserInformation> = ({ user, setUser }) => {
    const [editingField, setEditingField] = useState<"name" | "email" | null>(null);
    const [tempValue, setTempValue] = useState("");
    

    const handleEditField = (field: "name" | "email") => {
        console.log("proceso 0?");
        
        setEditingField(field);
        setTempValue(user ? user[field] : "");
    };

    const handleSaveField = () => {
        if (!user) return;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (editingField === "email" && !emailRegex.test(tempValue)) {
            setEditingField(null);
            alert("Correo invalido");
            return;
        }
        const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : []
        if (users.find((user: IUser) => user.email === tempValue)) {
            setEditingField(null);
            alert("El correo ya esta registrado");
            return;
        }
        
        const updatedUser = { ...user, [editingField as string]: tempValue };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setEditingField(null);
    }


    
  return (
    <div className='flex flex-col items-center justify-center bg-whiteTransparent font-kanit text-[rgb(0,0,0)] w-full min-w-[275px] h-[80%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl'>
        {
            user ? (
                <div className=' flex flex-col justify-start gap-4 h-full w-full px-6 py-2'>
                    <div className='w-full h-[20%] flex flex-row items-center justify-between'>
                    <h2 className='font-bold text-xl font-kanit'>Información personal</h2>
                    </div>
                    <div className='flex flex-col items-start justify-around w-full h-2/3 text-xl'>
                    <label className='text-sm text-gray-500'>Nombre</label>
                    <div className='flex flex-row items-center justify-between w-full pl-3'>
                        {editingField === "name" ? (
                            <input
                                name="name"
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
                    <p className='mr-4 font-medium'>{user.name}</p>
                )}
                    <SquarePen size={20} onClick={() => handleEditField("name")} className='cursor-pointer'/>
                    </div>
                    <label className='text-sm text-gray-500'>Email</label>
                    <div className='flex flex-row items-center justify-between w-full pl-3'>
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
                                <p className='mr-4 font-medium'>{user.email}</p>
                            )
                        }
                    <SquarePen size={20} onClick={() => handleEditField("email")} className='cursor-pointer' />
                    </div>
                    </div>
                        </div>
            ) : (
                <div>usuario no encontrado</div>
            )
            
            
        }
    </div>
  )
}
