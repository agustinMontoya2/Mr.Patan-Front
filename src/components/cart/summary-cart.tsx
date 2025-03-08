"use client";
import { CartContext } from "@/context/cart";
import { IOrder } from "@/interfaces/user";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

export const SummaryCart = () => {
    const router = useRouter();
    const cartContext = useContext(CartContext);
    // const handleGetCart = cartContext.handleGetCart
    const cart = cartContext.cart
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const envio = 0
    const total = subtotal + envio

    const handleCreateOrder = () => {
        if (cart.length === 0) 
        {
            alert('El carrito esta vacio')
            return
        }
        const orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders') as string) : []
        const newOrder: IOrder = {
            id: Math.floor(Math.random() * 1000) ,
            date: new Date().toLocaleDateString(),
            total: total,
            status: "pendiente",
            cart: cart
        }
        localStorage.setItem('orders', JSON.stringify([...orders, newOrder]))
        cartContext.handleDeleteCart()
        router.push('/perfil/ordenes')
    }

    useEffect(() => {
        // handleGetCart()
    }, [])
    return (
        <div className="flex flex-col justify-between bg-whiteTransparent h-[50%] min-w-[320px] w-full lg:w-[35%] rounded-2xl border-solid border-2 border-black text-black py-4 px-6">
            <div>
            <h3 className="text-xl font-semibold font-kanit">Resumen de compra</h3>
            <div className="flex flex-row items-center justify-between border-b border-black py-2">
            <p className="text-gray-800 text-xl font-kanit">Subtotal:</p>
            <p className="text-gray-800 text-xl font-kanit">${subtotal}</p>
            </div>
            <div className="flex flex-row items-center justify-between border-b border-black py-2">
            <p className="text-gray-800 text-xl font-kanit">Total:</p>
            <p className="text-gray-800 text-xl font-kanit">${total}</p>
            </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-[100%]">
            <button
              className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-all w-[100%]"
              onClick={() => handleCreateOrder()}
            >
              Confirmar compra
            </button>
            <button
              className="px-4 py-2 bg-white hover:bg-gray-400 rounded-lg transition-all w-[100%]"
              onClick={() => router.push("/productos/alimentos")}
            >
              Seguir comprando
            </button>
            </div>
        </div>
    )
}