import { Footer } from '@/components/footer/footer'
import { Orders } from '@/components/orders/orders'
import React from 'react'
import { NavbarView } from '../navbarView/navbar-view'

export const OrdersView = () => {
  return (
    <div className='h-screen w-screen bg-profile flex flex-col items-center justify-between'>
          <NavbarView/>
          <Orders/>
          <Footer/>
        </div>
  )
}
