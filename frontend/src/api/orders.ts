
import { authAxios, axi } from "./useAxios";
import { Order } from "../Interfaces";



export const createOrder = async (data: Order) => {
    await authAxios.post('/orders/crate/', data)
}