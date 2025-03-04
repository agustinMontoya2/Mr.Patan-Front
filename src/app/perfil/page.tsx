"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import UserPet from '@/components/user-profile/user-pet'
import UserProfile from '@/components/user-profile/user-profile'
import useRedirect from '@/customHooks/useRedirect'
import React from 'react'

function Profile() {
  useRedirect("user", "/inicio", true);
  return (
    <div className='flex flex-col items-center justify-between w-screen h-screen'>
        <Navbar />
        <UserProfile />
        <UserPet />
        <Footer />
    </div>
  )
}

export default Profile