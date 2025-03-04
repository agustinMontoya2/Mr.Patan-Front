"use client"
import FoodView from '@/views/productsView/products-view'
import { useParams } from 'next/navigation';
import React from 'react'

  export default function Products() {
    const params = useParams();
    const category = params.category as string

    return (
      <div>
        { category ? <FoodView category={category}/> : <h1>404</h1> }
      </div>
    )

}

