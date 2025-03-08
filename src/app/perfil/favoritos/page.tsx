"use client"
import useRedirect from '@/customHooks/useRedirect'
import { FavoritesView } from '@/views/favoritesView/favorites-view'
import React from 'react'

export default function Favoritos() {
  useRedirect("user", "/inicio", true)
  return <FavoritesView/>
}
