"use client"
import { Cart } from '@/components/cart/cart'
import { Footer } from '@/components/footer/footer'
import { CartProvider } from '@/context/cart'
import React from 'react'
import { NavbarView } from '../navbarView/navbar-view'

export const CartView = () => {
  return (
    
    <div className='bg-profile h-screen w-screen flex flex-col items-center justify-between'>
      <NavbarView/>
      <CartProvider>
      <Cart/>
      </CartProvider>
      <Footer/>
    </div>
  )
}
