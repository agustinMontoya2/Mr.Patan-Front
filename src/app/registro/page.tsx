import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import { Register } from '@/components/register/register'
import React from 'react'

export default function Registro() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-between'>
        <Navbar/>
        <Register/>
        <Footer/>
    </div>
  )
}
