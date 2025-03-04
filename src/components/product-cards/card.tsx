"use client";
import { ICard } from '@/interfaces/products'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Card: React.FC<ICard> = ({product, favorites, cart, handleAddToCart, handleFavorite}) => {
  return (
    <div className='relative flex flex-col items-center justify-between py-3 bg-whiteTransparent text-[rgb(0,0,0)] w-60 h-68 min-h-[282px] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl'>
  <div className='absolute top-2 right-2 transition-all duration-300 active:scale-90'>
    <Image src={favorites.some(favorite => favorite.product.name === product.name) ? "/star.png" : "/staroutline.png"} alt="pet" width={24} height={6} className="mx-2 cursor-pointer" onClick={() => handleFavorite(product)}/>
  </div>
  <Image src={product.image} alt={product.name} width={130} height={130} className='rounded-2xl' />
  <div className='flex flex-col items-center justify-center px-2'>
    <h2 className='text-2xl font-kanit text-center'>{product.name}</h2>
    <h2 className='text-xl font-kanit'>${product.price}</h2>
  </div>
  <button onClick={() => handleAddToCart(product)} className='flex items-center gap-2 bg-black text-white px-3 py-1 rounded-xl transition-all duration-300 hover:bg-gray-800 active:scale-95'>
    <ShoppingCart size={20} />
    {cart.some(item => item.name === product.name) ? "Eliminar del carrito" : "Agregar al carrito"}
  </button>
</div>
  )
}

export default Card