
import { authAxios } from "./useAxios";
import { Order } from "../Interfaces";



export const create_order = async (data: Order) => {
    await authAxios.post('/orders/create/', data)
}
export const my_orders = async () => {
    const response = await authAxios.get('orders/my/orders/') 
    return response.data
 };