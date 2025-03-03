"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import Cards from '@/components/product-cards/cards'
import { IProduct } from '@/interfaces/products'
import React from 'react'

export default function AccesoriesView() {
  const [changeCart, setChangeCart] = React.useState(false)
      const updateCart = ()=> {
        setChangeCart(!changeCart)
        console.log(changeCart);
        
      }

    const products: IProduct[] = []

    for (let i = 1; i < 21; i++) {
      products.push ({
        id: i,
        name: `Accesorio para perros ${i}`,
        description: 'Accesorio para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/nTnZXvh-JwfIhNF_G5bEJBrpl0KVUZS0AZ4N75T0yEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkUngyVDZTbkwu/anBn'
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
