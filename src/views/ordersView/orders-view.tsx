import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import { Orders } from '@/components/orders/orders'
import React from 'react'

export const OrdersView = () => {
  return (
    <div className='h-screen w-screen bg-profile flex flex-col items-center justify-between'>
          <Navbar/>
          <Orders/>
          <Footer/>
        </div>
  )
}
