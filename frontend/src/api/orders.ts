
import { authAxios } from "./useAxios";
import { Order } from "../Interfaces";

export const edit_order = async (id: number) => {
    await authAxios.put(`/orders/deliver/${id}/`)
   
}

export const search_order = async (query: string) => {
    const response = await authAxios.get(`/orders/search/?query=${query}`)
    return response.data;
};

export const solo_order = async (id: number) => {
    const response =await authAxios.get(`/orders/solo/${id}/`)
    return response.data
}

export const create_order = async (data: Order) => {
    await authAxios.post('/orders/create/', data)
}

export const my_orders = async () => {
    const response = await authAxios.get('orders/my/orders/') 
    return response.data
 };

 export const get_orders = async () => {
    const response = await authAxios.get('orders/') 
    return response.data
 };