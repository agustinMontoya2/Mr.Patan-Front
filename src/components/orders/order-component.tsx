import { useState } from "react";

export const OrderComponent = () => {
    const [orderOpen, setOrderOpen] = useState(false);
    const openOrder = () => setOrderOpen(!orderOpen);
    return (
        <div  className={`bg-white/50 shadow-lg text-black flex flex-col items-center justify-around w-full border-b border-gray-300 rounded-2xl p-4 ${orderOpen ? "h-48" : "h-24"}`}>
            <div onClick={openOrder} className={`cursor-pointer w-full ${orderOpen ? `a` : `b`}`}>
                OrderComponent
            </div>
            <div className={orderOpen ? "flex flex-row items-center justify-between w-full" : "hidden"}>
                detalles
            </div>
        </div>
        )
}