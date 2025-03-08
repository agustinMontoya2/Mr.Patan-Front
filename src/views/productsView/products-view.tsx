"use client"
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import Cards from '@/components/product-cards/cards'
import { CartProvider } from '@/context/cart'
import { IProduct, IProductsView } from '@/interfaces/products'
import React from 'react'

const ProductView: React.FC <IProductsView> = ( { category } ) => {
    const products: IProduct[] = []
    const categories = ["alimentos", "ropa", "juguetes", "accesorios", "farmacia"]

    for (let i = 1; i < 11; i++) {
      products.push ({
        id: `20b892c2-9745-4a2c-b024-53be7b7052e0${i}`,
        name: `Alimento para perros ${i}`,
        category: "alimentos",
        subcategory: ["perros"],
        description: 'Alimento para perros',
        price: 1000,
        quantity: 1,
        image: 'https://imgs.search.brave.com/R-woJwIqxfu1w5BNnCHi4oRX6oxqeiHF6HXIBbOGQV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb3Nh/cmlvLnBsdXNwZXQu/Y29tLmFyL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L2FsaW1lbnRvLWdh/bmFjYW4tcGVycm8t/YWR1bHRvLTAxXzA2/NTE2YThlLWY2YmMt/NDljNy1hYjM2LTU4/NTkzNzU1MmQ0Zi5q/cGc_dj0xNzAyNDgy/NDM2JndpZHRoPTEw/ODA'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e1${i}`,
        name: `Alimento para gatos ${i}`,
        category: "alimentos",
        subcategory: ["gatos"],
        description: 'Alimento para gatos',
        price: 1200,
        quantity: 1,
        image: 'https://imgs.search.brave.com/2Mf5XKXe5rZVgMhWVXx7L7WmPp2p0y9o0Dw4QK8yF3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyODhXVnBOeEwu/anBn'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e2${i}`,
        name: `Ropa para perros ${i}`,
        category: "ropa",
        subcategory: ["perros", "talles chicos", "talles medianos", "talles grandes"],
        description: 'Ropa para perros',
        price: 1300,
        quantity: 1,
        image: 'https://imgs.search.brave.com/HcvbKE2E_XbE6MLGGc7i4GrAgnm3HiVcOSJiDJp57r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyODhXVnBOeEwu/anBn'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e3${i}`,
        name: `Ropa para gatos ${i}`,
        category: "ropa",
        subcategory: ["gatos", "talles chicos", "talles medianos", "talles grandes"],
        description: 'Ropa para gatos',
        price: 1400,
        quantity: 1,
        image: 'https://imgs.search.brave.com/2Mf5XKXe5rZVgMhWVXx7L7WmPp2p0y9o0Dw4QK8yF3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyODhXVnBOeEwu/anBn'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e4${i}`,
        name: `Juguete para perros ${i}`,
        category: "juguetes",
        subcategory: ["perros"],
        description: 'Juguete para perros',
        price: 1500,
        quantity: 1,
        image: 'https://imgs.search.brave.com/3NbUch4M7voZRjZMOTOEWR3MJ4Mb1yxqpUv0qgWVLUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxN1k0TENQQ1BM/LmpwZw'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e5${i}`,
        name: `Juguete para gatos ${i}`,
        category: "juguetes",
        subcategory: ["gatos"],
        description: 'Juguete para gatos',
        price: 1000,
        quantity: 1,
        image: 'https://imgs.search.brave.com/2Mf5XKXe5rZVgMhWVXx7L7WmPp2p0y9o0Dw4QK8yF3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyODhXVnBOeEwu/anBn'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e6${i}`,
        name: `Accesorio para perros ${i}`,
        category: "accesorios",
        subcategory: ["perros"],
        description: 'Accesorio para perros',
        price: 1000,
        quantity: 1,
        image: 'https://imgs.search.brave.com/nTnZXvh-JwfIhNF_G5bEJBrpl0KVUZS0AZ4N75T0yEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkUngyVDZTbkwu/anBn'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e7${i}`,
        name: `Accesorio para gatos ${i}`,
        category: "accesorios",
        subcategory: ["gatos"],
        description: 'Accesorio para gatos',
        price: 1000,
        quantity: 1,
        image: 'https://imgs.search.brave.com/nTnZXvh-JwfIhNF_G5bEJBrpl0KVUZS0AZ4N75T0yEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkUngyVDZTbkwu/anBn'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e8${i}`,
        name: `Accesorio para perros y gatos ${i}`,
        category: "accesorios",
        subcategory: ["perros", "gatos"],
        description: 'Accesorio para perros y gatos',
        price: 1000,
        quantity: 1,
        image: 'https://imgs.search.brave.com/nTnZXvh-JwfIhNF_G5bEJBrpl0KVUZS0AZ4N75T0yEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkUngyVDZTbkwu/anBn'
      },
      {
        id: `20b892c2-9745-4a2c-b024-53be7b7052e8${i}`,
        name: `Medicamento para perros ${i}`,
        category: "farmacia",
        subcategory: ["perros"],
        description: 'Medicamento para perros',
        price: 1000,
        quantity: 1,
        image: 'https://imgs.search.brave.com/-M3J6GtPVcDB-rZX7dJ9oRQJ00UNPghKOO2wFWzSIe8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb3Bl/dC52dGV4YXNzZXRz/LmNvbS9hcnF1aXZv/cy9pZHMvMTYzNDky/LTMwMC0zMDA_dj02/Mzg0MzY5MjQxODk1/MDAwMDAmd2lkdGg9/MzAwJmhlaWdodD0z/MDAmYXNwZWN0PXRy/dWU'
      },
    {
      id: `20b892c2-9745-4a2c-b024-53be7b7052e9${i}`,
      name: `Medicamento para gatos ${i}`,
      category: "farmacia",
      subcategory: ["gatos"],
      description: 'Medicamento para gatos',
      price: 1000,
      quantity: 1,
      image: "https://imgs.search.brave.com/2Mf5XKXe5rZVgMhWVXx7L7WmPp2p0y9o0Dw4QK8yF3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyODhXVnBOeEwu/anBn"
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