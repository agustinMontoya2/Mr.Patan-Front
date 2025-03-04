"use client";
import React, { useEffect } from 'react'
import Card from './card'
import {  ICards, IFavorite, IProduct } from '@/interfaces/products'

const Cards: React.FC<ICards> = ({products, updateCart}) => {
  const [favorites, setFavorites] = React.useState<IFavorite[]>([])
  const [cart, setCart] = React.useState<IProduct[]>([])

  const handleGetFavorites = () => {
    const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') as string) : []
    setFavorites(favorites)
    }
  
    const handleFavorite = (product: IProduct) => {
      if (favorites.some(favorite => favorite.product.name === product.name)) {
        const newFavorites = favorites.filter(favorite => favorite.product.name !== product.name)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        handleGetFavorites()
        return
      } 
      localStorage.setItem('favorites', JSON.stringify([...favorites, {product}]))
      handleGetFavorites()
    }
    const handleGetCart = () => {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : []
      setCart(cart)
    }
      const handleAddToCart = (product: IProduct) => {
        if (cart.some(item => item.name === product.name)) {
          const newCart = cart.filter(item => item.name !== product.name)
          localStorage.setItem('cart', JSON.stringify(newCart))
          handleGetCart()
          updateCart()
          return
        } 
        localStorage.setItem('cart', JSON.stringify([...cart, product]))
        handleGetCart()
        updateCart()
      }
    
      useEffect(() => {
        handleGetFavorites()
        handleGetCart()
      }, [])

  return (
    <div className='w-full h-full overflow-y-auto flex flex-col items-center py-5'>
    <div className='max-w-screen max-h-screen  flex flex-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    {products.map(product => <Card key={product.id} product={product} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} favorites={favorites} cart={cart}/>)}
    </div>
    </div>
  )
}

export default Cards