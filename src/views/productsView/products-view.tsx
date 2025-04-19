"use client"
import { Footer } from '@/components/footer/footer'
import Cards from '@/components/product-cards/cards'
import { CartProvider } from '@/context/cart'
import { IProduct, IProductsView } from '@/interfaces/products'
import React from 'react'
import * as productsData from '../../helpers/products.json'
import { NavbarView } from '../navbarView/navbar-view'

const ProductView: React.FC <IProductsView> = ( { category } ) => {
    const products: IProduct[] = productsData.products
    
    const categories = ["alimentos", "ropa", "juguetes", "accesorios", "farmacia"]
    const productsByCategory = products.filter((product) => product.category === category);
    
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-between'>
        <NavbarView/>
        <CartProvider>
        {categories.includes(category) ? <Cards products={productsByCategory}/> : 
        <p>La categoria no existe</p>}
        </CartProvider>
        <Footer/>
    </div>
  )
}

export default ProductView