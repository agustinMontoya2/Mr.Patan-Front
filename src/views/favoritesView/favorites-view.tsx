import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import React from 'react'

export const FavoritesView = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-between'>
          <Navbar/>
          <Footer/>
        </div>
  )
}
