import { CartContext } from "@/context/cart";
import { useContext, useEffect} from "react";
import { CartProduct } from "./cart-product";
import { IProduct } from "@/interfaces/products";
import { CartHeader } from "./cart-header";

export const ProductsCart = () => {
    const cartContext = useContext(CartContext);

    const handleCart = cartContext.handleGetCart
    const handleDeleteQuantity = (product: IProduct) => {
        cartContext.handleDeleteQuantity(product)
        handleCart()
    }
    const handleAddQuantity = (product: IProduct) => {
        cartContext.handleAddQuantity(product)
        handleCart()
    }
    const products = cartContext.cart

    useEffect(() => {
        handleCart()
    }, [])
    return (
        <div className="flex flex-col overflow-x-auto bg-whiteTransparent shadow-lg h-[40%] lg:h-[60%] min-w-[320px] w-full lg:w-[60%] rounded-2xl border-2 border-black">
        {/* Encabezados alineados con los productos */}
        <CartHeader products={products} />
      
        <div className="flex flex-col gap-2 w-full h-full px-2 py-2">
          {products?.map((product, index) => (
            <CartProduct
              product={product}
              handleAddQuantity={handleAddQuantity}
              handleDeleteQuantity={handleDeleteQuantity}
              key={index}
            />
          ))}
        </div>
      </div>
    )
}