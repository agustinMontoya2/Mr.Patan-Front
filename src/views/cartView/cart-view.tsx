"use client"
import { Cart } from '@/components/cart/cart'
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import { CartProvider } from '@/context/cart'
import React from 'react'

export const CartView = () => {
  return (
    
    <div className='bg-profile h-screen w-screen flex flex-col items-center justify-between'>
      <CartProvider>
      <Navbar/>
      <Cart/>
      <Footer/>
    </CartProvider>
    </div>
  )
}
