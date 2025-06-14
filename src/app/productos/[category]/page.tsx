"use client"
import useRedirect from '@/customHooks/useRedirect';
import ProductView from '@/views/productsView/products-view'
import { useParams } from 'next/navigation';
import React from 'react'

  export default function Products() {
    const params = useParams();
    const category = params.category as string
    useRedirect("user", "/inicio", true)

    return (
      <div>
        { category ? <ProductView category={category} /> : <h1>404</h1> }
      </div>
    )

}

