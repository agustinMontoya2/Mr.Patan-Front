import { IOrderComponent, IProduct } from "@/interfaces/products";
import { ChevronDown, ChevronUp, Package } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const OrderComponent: React.FC<IOrderComponent> = ({order}) => {
    const [orderOpen, setOrderOpen] = useState(false);
    const openOrder = () => setOrderOpen(!orderOpen);
    return (
        <div  className={`bg-white/50 shadow-lg text-black flex flex-col items-center justify-around w-full border-b border-gray-300 rounded-2xl`}>
            <div onClick={openOrder} className={`flex flex-row items-center justify-between cursor-pointer w-full h-20 ssm:h-16 px-4 ${orderOpen ? `a` : `b`}`}>
                <div className="flex flex-row items-center justify-start w-36 h-20 ssm:h-16 gap-4">
                    <Package size={30} />
                    <div className="font-kanit">
                        <p className="text-lg">Orden-{order.id}</p>
                        <p className="text-md text-gray-500">{order.date}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end h-16 gap-4 font-poppins">
                    <div className="flex flex-col ssm:flex-row items-center gap-1 ssm:gap-4">
                    <div className={`w-28 h-8 rounded-md flex flex-row items-center justify-center ${order.status === "pendiente" ? `bg-yellow-400/70` : order.status === "recibido" ? `bg-green-400/70` : `bg-red-400/70`}`}>
                        <p>{order.status}</p>
                    </div>
                        <p className="font-semibold w-[60px] text-center">${order.total}</p>
                    </div>
                    {orderOpen? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>
            {
            orderOpen &&
            <div className={`flex flex-col w-full min-h-16 border-t border-gray-400 px-4`}>
                <p className="font-kanit text-lg">Productos</p>
                <div className="flex flex-col w-full px-4">
                {
                    order.cart.map((product: IProduct, index) => (
                        <div key={index} className="flex flex-row items-center justify-between w-full py-2">
                            <div className="flex flex-row items-center gap-3">
                                    <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={60}
                                    height={60}
                                    className="rounded-md"
                                    />
                                    <div className="font-poppins w-32">
                                    <p className="font-semibold">{product.name}</p>
                                    <p className="text-gray-500 text-sm">{product.quantity}</p>
                                </div>
                            </div>
                            <p className="font-poppins">${product.price * product.quantity}</p>
                        </div>
                        ))
                }
                </div>
            </div>
            }
        </div>
        )
}