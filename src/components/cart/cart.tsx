import React from 'react'
import { ProductsCart } from './products-cart'
import { SummaryCart } from './summary-cart'

export const Cart = () => {
  return (
    <div className='h-[80%] w-[90%] flex flex-col items-center justify-between'>
        <h1 className='text-3xl font-kanit text-black font-bold'>Tu carrito</h1>
        <div className='w-full h-[80%] lg:h-[90%] flex flex-col lg:flex-row items-center justify-between'>
        <ProductsCart/>
        <SummaryCart/>
        </div>
    </div>
  )
}
