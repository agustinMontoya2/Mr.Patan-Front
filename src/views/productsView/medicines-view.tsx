"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import Cards from '@/components/product-cards/cards'
import { IProduct } from '@/interfaces/products'
import React from 'react'

export default function MedicinesView() {
  const [changeCart, setChangeCart] = React.useState(false)
    const updateCart = ()=> {
      setChangeCart(!changeCart)
      console.log(changeCart);
      
    }

  const products: IProduct[] = []

    for (let i = 1; i < 21; i++) {
      products.push ({
        id: i,
        name: `Medicamento para perros ${i}`,
        description: 'Medicamento para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/-M3J6GtPVcDB-rZX7dJ9oRQJ00UNPghKOO2wFWzSIe8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb3Bl/dC52dGV4YXNzZXRz/LmNvbS9hcnF1aXZv/cy9pZHMvMTYzNDky/LTMwMC0zMDA_dj02/Mzg0MzY5MjQxODk1/MDAwMDAmd2lkdGg9/MzAwJmhlaWdodD0z/MDAmYXNwZWN0PXRy/dWU'
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
