import { ICartContext, IProduct } from "@/interfaces/products";
import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const handleAddToCart = (product: IProduct) => {
        console.log("agregando al carrito");
        
        if (cart.some(item => item.name === product.name)) {
          const newCart = cart.filter(item => item.name !== product.name)
          localStorage.setItem('cart', JSON.stringify(newCart))
          return
        } 
        localStorage.setItem('cart', JSON.stringify([...cart, product]))
        
    }
    const handleGetCart = () => {
        console.log("trayendo carrito");
        
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : []
        setCart(cart)
    }
    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleGetCart }}>
            {children}
        </CartContext.Provider>
    )

};