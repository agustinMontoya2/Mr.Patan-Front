"use client"
import { Footer } from '@/components/footer/footer'
import { Register } from '@/components/register/register'
import useRedirect from '@/customHooks/useRedirect'
import { NavbarView } from '@/views/navbarView/navbar-view'
import React from 'react'

export default function Registro() {
  useRedirect("user", "/perfil", false);
  return (
    <div className='bg-home w-screen h-screen flex flex-col items-center justify-between'>
        <NavbarView/>
        <Register/>
        <Footer/>
    </div>
  )
}
