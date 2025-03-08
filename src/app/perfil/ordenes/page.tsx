"use client"
import useRedirect from '@/customHooks/useRedirect'
import { OrdersView } from '@/views/ordersView/orders-view'
import React from 'react'

export default function Ordenes() {
  useRedirect("user", "/inicio", true)
  return <OrdersView/>
}
