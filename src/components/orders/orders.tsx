import React from 'react'
import { OrdersComponent } from './orders-component'

export const Orders = () => {
  return (
    <div className='h-[80%] w-[90%] flex flex-col items-center justify-between'>
            <h1 className='text-3xl font-kanit text-black font-bold'>Tus ordenes</h1>
            <div className='w-full h-[90%] flex flex-col items-center justify-center'>
            <OrdersComponent/>
            </div>
    </div>
  )
}
