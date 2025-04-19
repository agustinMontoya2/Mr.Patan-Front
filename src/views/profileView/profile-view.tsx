"use client"
import { Footer } from '@/components/footer/footer'
import React  from 'react'
import { UserConteiner } from '@/components/user-profile/user-conteiner'
import { NavbarView } from '../navbarView/navbar-view'

export const ProfileView = () => {
    
    return (
    <div className='flex flex-col items-center justify-between w-screen h-screen bg-profile'>
  <NavbarView />
  <UserConteiner />
  <Footer />
</div>)
}
