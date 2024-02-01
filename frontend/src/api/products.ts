import { Product } from "../Interfaces";
import { authAxios, axi } from "./useAxios";

//esta seccion la usamos para crear las funciones CRUD, que puego aplicaremos en las dostintas pages


//esta funcion la creamos para TRAER todos los productos. Lo aplicamos en HomePage
export const getProducts = async  ({ pageParam = 1}) =>{
    const response = await axi.get(`/products/?page=${pageParam}&pages=9`)
    return response.data
}

//esta funcion la creamos para ELIMINAR un nuevo producto. Lo aplicamos en 
export const deleteProduct = async (id: string) => {
  await authAxios.delete(`products/delete/${id}/`)
}

//esta funcion la creamos para CREAR un nuevo producto. Lo aplicamos en AddProductPage
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


  //esta funcion la creamos para traer un solo producto. Lo aplicamos en EditProductPage para traer la info del producto que queremos editar
  export const get_solo_prod = async (id: number) => { 
    const response = await authAxios.get(`/products/get/admin/${id}`)
    return response.data
  }

  export const getProduct = async (name: string | undefined) => {
    if (!name) {
      throw new Error('No product found with that name.'); 
    }
    const res = await axi.get(`products/get/${name}`)
    return res.data
  }

  //esta funcion la creamos para EDITAR un producto. Lo aplicamos en EditProductPage
  export const editProduct = async (data: Product) => { //este Product es el definido en Interfaces
  const formData = new FormData();//usamos FormData para poder cargarle la imagen tambien 
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("count_in_stock", data.count_in_stock.toString());
  formData.append("category", data.category);
  formData.append("price", data.price.toString());
  if (data.image) {
    formData.append("image", data.image);
  }
  await authAxios.put(`products/edit/${data.id}/`, formData);//aca con metodo PUT editamos el producto al backend a la url 'products/edit/'
}

  //esta funcion la creamos para Buscar un producto por la barra buscadora. Lo aplicamos en SearchResults
export const search_prod = async (query: string) => {
  const response = await authAxios.get(`/products/search/?query=${query}`)
  return response.data
}

//esta funcion la creamos para LISTAR los productos de cada categoria. Lo aplicamos en CatePage
export const cate_api = async (category: string) => {
  const response = await authAxios.get(`/products/cate/${category}/`)
  return response.data
}
  