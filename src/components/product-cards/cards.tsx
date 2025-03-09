"use client";
import React, { useEffect, useRef } from 'react'
import Card from './card'
import {  ICards, IFavorite, IProduct } from '@/interfaces/products'
import { CartContext } from '@/context/cart';
import { Filters } from './filters';
import { IFilters } from '@/interfaces/menu';
import { ChevronDown } from 'lucide-react';
import { Search } from './search';
import { AddedToCart } from '../cart/added-cart';

const Cards: React.FC<ICards> = ({products}) => {
  const [favorites, setFavorites] = React.useState<IFavorite[]>([])
  const [filters, setFilters] = React.useState<IFilters>({
    category: [],
    priceOrder: ''
  })
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [seeFilters, setSeeFilters] = React.useState<boolean>(false)
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const cartContext = React.useContext(CartContext)
  const AddedRef = useRef<HTMLDivElement>(null); 

  const toggleCategory = (category: string) => {
    console.log(category);
    if (category === '') {
      console.log("limpiando categorias");
      setFilters({...filters, category: []})
      return
    }
    if(filters.category.includes(category)){
      console.log("la categoria ya estaba");
      console.log({...filters, category: filters.category.filter(cat => cat !== category)});
      
      setFilters({...filters, category: filters.category.filter(cat => cat !== category)})
      return
    }
    setFilters({...filters, category: [...filters.category, category]})
    console.log({...filters, category: [...filters.category, category]});
    
  }

  const handleDeleteCategories = () => {
    setFilters({...filters, category: []})
    console.log(searchTerm);
    
  }
  

  const filteredProducts = products.filter(product =>
    (filters.category.length === 0 || filters.category.every(category => product.subcategory.includes(category))) 
    &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())) 
    
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters.priceOrder === 'asc') {
      return a.price - b.price
    } else if (filters.priceOrder === 'desc') {
      return b.price - a.price
    }
    return 0
  })

  const setPriceOrder = (order: string) => {
    setFilters({...filters, priceOrder: order})
  }

  const uniqueSubCategories = ()=> {
    const uniqueSubCategories: string[] = []
    const subCategories = products.flatMap(product => product.subcategory)
    subCategories.map(subcategory => {
      if (!uniqueSubCategories.includes(subcategory)) {
        uniqueSubCategories.push(subcategory)
      }
    })
    return uniqueSubCategories
  }
  
  const handleSeeFilters = () => {
    setSeeFilters(!seeFilters)
  }

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
    const handleGetCart = cartContext.handleGetCart
      const handleAddToCart = (product: IProduct) => {
        cartContext.handleAddToCart(product)
        setMenuOpen(true)
        handleGetCart()
      }
    
      useEffect(() => {
        handleGetFavorites()
        handleGetCart()
        // handleGetSubcategories()
      }, [])
      useEffect(() => {
        console.log("abriendo menu");
        
        const handleClickOutside = (event: MouseEvent) => {
          if (AddedRef.current && !AddedRef.current.contains(event.target as Node)) {
            console.log("cerrando menu");
            
            setMenuOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [menuOpen]);

  return (
    <div className={`w-full h-full py-4 gap-8 overflow-y-auto flex flex-col items-center justify-start bg-${products[0].category}`}>
      <div ref={AddedRef} className='absolute top-0 right-0'>
      <AddedToCart menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      { seeFilters ?
      <Filters toggleCategory={toggleCategory} setPriceOrder={setPriceOrder} handleDeleteCategories={handleDeleteCategories} handleSeeFilters={handleSeeFilters} subCategories={uniqueSubCategories()} filters={filters}/>
      : 
      <div onClick={() => handleSeeFilters()} className='w-[65%] h-[50px] flex flex-row items-center justify-center bg-whiteTransparent text-black border-black border-2 rounded-2xl p-4 shadow-lg font-kanit cursor-pointer gap-2'>
        <p className='text-lg underline'>Ver filtros</p>
        <ChevronDown size={24}/>
        </div>}
    <div className='flex flex-row h-[55%] sm:h-[45%] mb-0 grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
    {
    sortedProducts.map(product => 
    <Card key={product.id} product={product} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} favorites={favorites} cart={cartContext.cart}/>
    )}
    </div>
    </div>
  )
}

export default Cards