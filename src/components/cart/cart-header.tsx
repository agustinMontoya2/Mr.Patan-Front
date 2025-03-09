import { ICartHeader } from '@/interfaces/menu'
import React from 'react'

export const CartHeader: React.FC<ICartHeader> =({products})=> {
  return (
    <div className="sticky top-0 bg-white/70 shadow-lg min-w-[460px] max-h-[57px] text-black flex flex-row items-center justify-around h-24 w-full border-b border-gray-300 rounded-2xl p-4 gap-4 sm:gap-6">
    <div className="w-1/6 flex flex-col items-center text-center">
    Productos:
    </div>
    <div className="w-1/6 flex flex-col items-start">
    {products.length}
    </div>
    <div className="w-1/6 flex flex-col items-center text-center">
    Precio
    </div>
    <div className="flex-col flex items-center text-center w-1/6 min-w-[100px]">
    Cantidad
    </div>
    <div className="w-1/6 flex flex-col items-center text-center">
    Total
    </div>
    <div className="w-1/6 flex flex-col items-center cursor-pointer">
    
    </div>
  </div>
  )
}
