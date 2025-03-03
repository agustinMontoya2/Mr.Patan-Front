"use client"
import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';
import Cards from '@/components/product-cards/cards';
import { IProduct } from '@/interfaces/products';
import React from 'react'

export default function ToysView() {
  const [changeCart, setChangeCart] = React.useState(false)
    const updateCart = ()=> {
      setChangeCart(!changeCart)
      console.log(changeCart);
      
    }

    const products: IProduct[] = []

    for (let i = 1; i < 21; i++) {
      products.push ({
        id: i,
        name: `Juguete para perros ${i}`,
        description: 'Juguete para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/3NbUch4M7voZRjZMOTOEWR3MJ4Mb1yxqpUv0qgWVLUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxN1k0TENQQ1BM/LmpwZw'
      });
      
    }
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-between'>
        <Navbar changeCart={changeCart}/>
        <Cards products={products} updateCart={updateCart}/>
        <Footer/>
    </div>
  )
}
