"use client"
import useRedirect from '@/customHooks/useRedirect'
import { CartView } from '@/views/cartView/cart-view'
import React from 'react'

export default function Carrito() {
  useRedirect("user", "/inicio", true)
  return <CartView/>
}
