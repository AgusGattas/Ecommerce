import axios, { AxiosRequestHeaders } from "axios";
import { useAuthStore } from "../store/auth";
import jwt_decode from "jwt-decode";
import { Token } from "../Interfaces";



function logout() {
    useAuthStore.getState().logout()
    window.location.href = '/login'
}

const baseURL = "http://127.0.0.1:8000"

/*la idea es usar este "axi" en cada request que NO se necesite autenticacion*/
export const axi = axios.create({
    baseURL
})

/*la idea es usar este "authAxios" en cada request que se necesite autenticacion*/
export const authAxios = axios.create({
    baseURL,
    withCredentials: true
});


/*esta funcion lo que nos permite es manejar el refreesh token para que cada tanto tiempo 
se genere un nuevo access token por tema de seguridad y no deba logearse cada vez que se finaliza
el tiempo de un token*/
authAxios.interceptors.request.use(async (config) => {
    const token: string = useAuthStore.getState().access;
    config.headers = {
        Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;
    
    
    const tokenDecoded: Token = jwt_decode(token)

    const expiration = new Date(tokenDecoded.exp * 1000);
    const now = new Date();
    const fiveMin = 1000 * 60 * 5;

    if (expiration.getTime() - now.getTime() < fiveMin) 
        try {
            const response = await axi.post('/users/refresh/', { refresh: useAuthStore.getState().refresh })
            useAuthStore.getState().setToken(response.data.access, response.data.refresh)
        } catch (err) {
            logout()
        }
        return config
});





