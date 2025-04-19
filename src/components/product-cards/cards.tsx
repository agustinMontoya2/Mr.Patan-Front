"use client";
import React, { useEffect, useRef } from 'react'
import Card from './card'
import {  ICards, IFavorite, IProduct } from '@/interfaces/products'
import { CartContext } from '@/context/cart';
import { Filters } from './filters';
import { IFilters } from '@/interfaces/menu';
import { ChevronDown } from 'lucide-react';
import { AddedToCart } from '../cart/added-cart';

const Cards: React.FC<ICards> = ({products, background}) => {
  const [watchProducts, setWatchProducts] = React.useState<IProduct[]>([])
  const [favorites, setFavorites] = React.useState<IFavorite[]>([])
  const [filterFavorites, setFilterFavorites] = React.useState<boolean>(false)
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
    if (category === '') {
      setFilters({...filters, category: []})
      return
    }
    if(filters.category.includes(category)){
      setFilters({...filters, category: filters.category.filter(cat => cat !== category)})
      return
    }
    setFilters({...filters, category: [...filters.category, category]})
    
  }
  


  const handleDeleteCategories = () => {
    setFilters({...filters, category: []})
    setFilterFavorites(false)
  }

  const handleProducts = () => {
    const favIds = favorites.map(fav => fav.product.id);
  
    const filtered = products.filter(product => {
      const matchesCategory =
        filters.category.length === 0 || filters.category.every(cat => product.subcategory.includes(cat));
  
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
  
      const matchesFavorite = !filterFavorites || favIds.includes(product.id);
  
      return matchesCategory && matchesSearch && matchesFavorite;
    });
  
    const sorted = filtered.sort((a, b) => {
      if (filters.priceOrder === 'asc') return a.price - b.price;
      if (filters.priceOrder === 'desc') return b.price - a.price;
      return 0;
    });
  
    setWatchProducts(sorted);
  };
  useEffect(() => {
    handleProducts()
  }, [filters, searchTerm, filterFavorites])
  
  

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
    const order = ["perros", "gatos", "razas pequeñas", "razas medianas", "razas grandes", "cachorros", "adultos"]
    return uniqueSubCategories.sort((a, b) => {
      const indexA = order.indexOf(a) === -1 ? Infinity : order.indexOf(a);
      const indexB = order.indexOf(b) === -1 ? Infinity : order.indexOf(b);
      return indexA - indexB;
    });
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
        const handleClickOutside = (event: MouseEvent) => {
          if (AddedRef.current && !AddedRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [menuOpen]);

  return (
    <div className={`w-full h-full py-4 gap-8 overflow-y-auto flex flex-col items-center justify-start bg-${background ? background : products[0]?.category}`}>
      <div className='absolute top-0 right-0'>
      <AddedToCart addedRef={AddedRef} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-8 fixed z-10'>
      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
      { seeFilters ?
      <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} toggleCategory={toggleCategory} filterFavorites={filterFavorites} setFilterFavorites={setFilterFavorites} setPriceOrder={setPriceOrder} handleDeleteCategories={handleDeleteCategories} handleSeeFilters={handleSeeFilters} subCategories={uniqueSubCategories()} filters={filters}/>
      : 
      <div onClick={() => handleSeeFilters()} className='w-[65%] h-[50px] flex flex-row items-center justify-center bg-whiteTransparent text-black border-black border-2 rounded-2xl p-4 shadow-lg font-kanit cursor-pointer gap-2'>
        <p className='text-lg underline'>Ver filtros</p>
        <ChevronDown size={24}/>
        </div>}
        </div>
    <div className='flex flex-row justify-center h-[55%] sm:h-[45%] mb-0 mt-24 grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
    {
    watchProducts.map(product => 
    <Card key={product.id} product={product} handleFavorite={handleFavorite} handleAddToCart={handleAddToCart} favorites={favorites} cart={cartContext.cart}/>
    )}
    </div>
    </div>
  )
}

export default Cards