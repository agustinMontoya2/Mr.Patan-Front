import { IOrder } from "@/interfaces/user"
import { OrderComponent } from "./order-component"

export const OrdersComponent = () => {
    const orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders') as string) : []
    return (
        <div className="bg-whiteTransparent text-[rgb(0,0,0)] w-full h-[80%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl">
        {orders.map((order: IOrder) => {
            return <OrderComponent key={order.id}/>
        })}
        </div>
        )
}