import { Product } from "../Interfaces";
import { authAxios, axi } from "./useAxios";


export const getProducts = async  ({ pageParam = 1}) =>{
    const response = await axi.get(`/products/?page=${pageParam}&pages=9`)
    return response.data
}

export const deleteProduct = async (id: string) => {
  await authAxios.delete(`products/delete/${id}/`)
}

//esta funcion la creamos para crear un nuevo producto. Lo aplicamos en AddProductPage
export const postProduct = async (data: Product) => { //este Product es el definido en Interfaces
    const formData = new FormData();//usamos FormData para poder cargarle la imagen tambien 
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("count_in_stock", data.count_in_stock.toString());
    formData.append("category", data.category);
    formData.append("price", data.price.toString());
    if (data.image) {
      formData.append("image", data.image);
    }
    await authAxios.post('products/post/', formData);//aca mandamos el FormData al backend a la url 'products/post/'
  }