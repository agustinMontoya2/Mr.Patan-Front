"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import Cards from '@/components/product-cards/cards'
import { IProduct } from '@/interfaces/products'
import React from 'react'

function FoodView() {
    const products: IProduct[] = []
    const [changeCart, setChangeCart] = React.useState(false)
    const updateCart = ()=> {
      setChangeCart(!changeCart)
      console.log(changeCart);
      
    }

    for (let i = 1; i < 21; i++) {
      products.push ({
        id: i,
        name: `Alimento para perros ${i}`,
        description: 'Alimento para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/R-woJwIqxfu1w5BNnCHi4oRX6oxqeiHF6HXIBbOGQV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb3Nh/cmlvLnBsdXNwZXQu/Y29tLmFyL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L2FsaW1lbnRvLWdh/bmFjYW4tcGVycm8t/YWR1bHRvLTAxXzA2/NTE2YThlLWY2YmMt/NDljNy1hYjM2LTU4/NTkzNzU1MmQ0Zi5q/cGc_dj0xNzAyNDgy/NDM2JndpZHRoPTEw/ODA'
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

export default FoodView