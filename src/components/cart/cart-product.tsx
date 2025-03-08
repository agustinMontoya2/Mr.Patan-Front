import { CartContext } from '@/context/cart'
import { ICartProduct } from '@/interfaces/menu'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React, { useContext } from 'react'

export const CartProduct: React.FC<ICartProduct> = ({product, handleAddQuantity, handleDeleteQuantity}) => {
    const cartContext = useContext(CartContext);
  return (
    <div className="bg-white/50 shadow-lg min-w-[450px] text-black flex flex-row items-center justify-around h-24 w-full border-b border-gray-300 rounded-2xl p-4 gap-4 sm:gap-6">
  <div className="w-1/6 flex flex-col items-center">
    <Image
      src={product.image}
      alt={product.name}
      width={80}
      height={80}
      className="rounded-md"
    />
  </div>
  <div className="w-1/6 flex flex-col items-center text-center">
    <p className="py-2 hover:bg-gray-100 rounded-md transition-all duration-300">
      {product.name}
    </p>
  </div>
  <div className="w-1/6 flex flex-col items-center text-center">
    <p className="font-semibold">${product.price}</p>
  </div>
  <div className="flex-row flex items-center justify-between w-1/6 min-w-[100px]">
    <button
      onClick={() => handleDeleteQuantity(product)}
      className="bg-white text-black text-xl px-2 py-1 rounded-md transition-all duration-300  active:scale-90"
    >
      <Minus size={20} />
    </button>
    <p className="font-semibold">{product.quantity}</p>
    <button
      onClick={() => handleAddQuantity(product)}
      className="bg-white text-black text-xl px-2 py-1 rounded-md transition-all duration-300  active:scale-90"
    >
      <Plus size={20} />
    </button>
  </div>
  <div className="w-1/6 flex flex-col items-center text-center">
    <p className="font-semibold">${product.price * product.quantity}</p>
  </div>
  <div className="w-1/6 flex flex-col items-center cursor-pointer">
    <Trash2
      size={20}
      color="red"
      className="transition-all duration-300 hover:scale-110"
      onClick={() => cartContext.handleDeleteProduct(product)}
    />
  </div>
</div>
  )
}
