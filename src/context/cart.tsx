import { notifyToast } from "@/helpers/notify/notifyToast";
import { ICartContext, IProduct } from "@/interfaces/products";
import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext<ICartContext>({
    cart: [],
    handleAddToCart: () => {},
    handleGetCart: () => {},
    handleAddQuantity: () => {},
    handleDeleteProduct: () => {},
    handleDeleteQuantity: () => {},
    handleDeleteCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const handleAddQuantity = (product: IProduct) => {
        const newCart = cart.map(item => {
            if (item.name === product.name) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    const handleDeleteQuantity = (product: IProduct) => {
        if (product.quantity <= 1) {
            handleDeleteProduct(product)
            return
        }
        const newCart = cart.map(item => {
            
            if (item.name === product.name) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    const handleDeleteProduct = (product: IProduct) => {
        notifyToast.confirmButton(()=> {
            const newCart = cart.filter(item => item.name !== product.name)
            localStorage.setItem('cart', JSON.stringify(newCart))
            handleGetCart()
        }, "¿Desea eliminar el producto del carrito?")
        
    }
    const handleDeleteCart = () => {
        const newCart: IProduct[] = []
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    const handleAddToCart = async (product: IProduct) => {
        
        const audio = new Audio('/dog-bark.mp3');
        audio.volume = 0.6
        
        await audio.play();
        if (cart.some(item => item.name === product.name)) {
        handleAddQuantity(product)
        handleGetCart()
          return
        } 
        localStorage.setItem('cart', JSON.stringify([...cart, product]))
        handleGetCart()
    }
    const handleGetCart = () => {
        
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : []
        setCart(cart)
    }
    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleGetCart, handleAddQuantity, handleDeleteQuantity, handleDeleteProduct, handleDeleteCart }}>
            {children}
        </CartContext.Provider>
    )

};