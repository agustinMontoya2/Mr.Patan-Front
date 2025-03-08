"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import UserPet from '@/components/user-profile/user-pet'
import UserProfile from '@/components/user-profile/user-profile'
import { CartProvider } from '@/context/cart'
import useRedirect from '@/customHooks/useRedirect'
import React from 'react'

function Profile() {
  useRedirect("user", "/inicio", true);
  return (
    <div className='flex flex-col items-center justify-between w-screen h-screen bg-profile'>
      <CartProvider>
        <Navbar />
        <UserProfile />
        <UserPet />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default Profile