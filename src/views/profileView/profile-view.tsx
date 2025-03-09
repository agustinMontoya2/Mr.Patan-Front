"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import { CartProvider } from '@/context/cart'
import React  from 'react'
import { UserConteiner } from '@/components/user-profile/user-conteiner'

export const ProfileView = () => {
    
    return (
    <div className='flex flex-col items-center justify-between w-screen h-screen bg-profile'>
<CartProvider>
  <Navbar />
  <UserConteiner />
  <Footer />
</CartProvider>
</div>)
}
