"use client"
import { Navbar } from "@/components/navbar/navbar"
import { CartProvider } from "@/context/cart"

export const NavbarView = () => {
    return (
        <CartProvider>
        <Navbar/>
        </CartProvider>
    )
}