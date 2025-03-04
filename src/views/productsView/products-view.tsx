"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import Cards from '@/components/product-cards/cards'
import { CartProvider } from '@/context/cart'
import { IProduct, IProductsView } from '@/interfaces/products'
import React from 'react'

const ProductView: React.FC <IProductsView> = ( { category } ) => {
    const products: IProduct[] = []
    
    const categories = ["alimentos", "ropa", "juguetes", "accesorios", "medicamentos"]

    for (let i = 1; i < 21; i++) {
      products.push ({
        id: i,
        name: `Alimento para perros ${i}`,
        category: "alimentos",
        description: 'Alimento para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/R-woJwIqxfu1w5BNnCHi4oRX6oxqeiHF6HXIBbOGQV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb3Nh/cmlvLnBsdXNwZXQu/Y29tLmFyL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L2FsaW1lbnRvLWdh/bmFjYW4tcGVycm8t/YWR1bHRvLTAxXzA2/NTE2YThlLWY2YmMt/NDljNy1hYjM2LTU4/NTkzNzU1MmQ0Zi5q/cGc_dj0xNzAyNDgy/NDM2JndpZHRoPTEw/ODA'
      },
      {
        id: i,
        name: `Ropa para perros ${i}`,
        category: "ropa",
        description: 'Ropa para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/HcvbKE2E_XbE6MLGGc7i4GrAgnm3HiVcOSJiDJp57r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyODhXVnBOeEwu/anBn'
      },
      {
        id: i,
        name: `Juguete para perros ${i}`,
        category: "juguetes",
        description: 'Juguete para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/3NbUch4M7voZRjZMOTOEWR3MJ4Mb1yxqpUv0qgWVLUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxN1k0TENQQ1BM/LmpwZw'
      },
      {
        id: i,
        name: `Accesorio para perros ${i}`,
        category: "accesorios",
        description: 'Accesorio para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/nTnZXvh-JwfIhNF_G5bEJBrpl0KVUZS0AZ4N75T0yEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkUngyVDZTbkwu/anBn'
      },
      {
        id: i,
        name: `Medicamento para perros ${i}`,
        category: "medicamentos",
        description: 'Medicamento para perros',
        price: 1000,
        image: 'https://imgs.search.brave.com/-M3J6GtPVcDB-rZX7dJ9oRQJ00UNPghKOO2wFWzSIe8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb3Bl/dC52dGV4YXNzZXRz/LmNvbS9hcnF1aXZv/cy9pZHMvMTYzNDky/LTMwMC0zMDA_dj02/Mzg0MzY5MjQxODk1/MDAwMDAmd2lkdGg9/MzAwJmhlaWdodD0z/MDAmYXNwZWN0PXRy/dWU'
      });
    }
    const productsByCategory = products.filter((product) => product.category === category);
    
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-between'>
      <CartProvider>
        <Navbar/>
        {categories.includes(category) ? <Cards products={productsByCategory}/> : 
        <p>La categoria no existe</p>}
        <Footer/>
        </CartProvider>
    </div>
  )
}

export default ProductView