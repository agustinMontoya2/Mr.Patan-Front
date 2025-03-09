import { IOrder } from "@/interfaces/user"
import { OrderComponent } from "./order-component"
import { useEffect, useState } from "react"

export const OrdersComponent = () => {
    const [orders, setOrders] = useState<IOrder[]>([])
    const handleGetOrders = () => {
        const orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders') as string) : []
        setOrders(orders)
    }
    useEffect(() => {
        handleGetOrders()
    }, [])
    return (
        <div className="flex flex-col gap-4 p-2 overflow-y-scroll bg-whiteTransparent text-[rgb(0,0,0)] min-w-[320px] w-full h-[80%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl">
        {orders.map((order: IOrder) => {
            return <OrderComponent order={order} key={order.id}/>
        })}
        </div>
        )
}