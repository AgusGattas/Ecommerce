import Logo from '../assets/logo.png'
import { Link, useNavigate, Navigate } from 'react-router-dom'

import { registerRequest } from '../api/users';
import { useMutation } from "@tanstack/react-query";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/auth';


const RegisterPage = () => {

    const navigate = useNavigate();
    const {isAuth} = useAuthStore();
    
     
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [last_name, setLast_Name] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    /*registerMutation es una instancia de useMutation, 
    que es una herramienta proporcionada por "react-query" para gestionar 
    las mutaciones en tu aplicación. En términos sencillos, una mutación en react-query 
    es una operación que modifica o actualiza datos, como enviar un formulario de registro.*/
    const registerMutation = useMutation({
      mutationFn:() => registerRequest(email, name, last_name, password), 
      onSuccess: () => {
        toast.success("Registro Exitoso! Hace Login")
        navigate("/login");
      },
      onError: (error) => {
        if (typeof error === 'string') {
          toast.error(error);
        } else {
          toast.error('An error occurred');
        }
      },
    });
  
    /* match es una función que compara la contraseña y la contraseña 
    repetida para asegurarse de que coincidan.
    -Si las contraseñas no coinciden, devuelve false.
    -Si coinciden, devuelve true.*/
    const match = () => {
      if (password !== rePassword) {
        return false;
      } else { 
        return true;
      }
    }
  
    /* handleSubmit es la función que se ejecuta cuando se envía el formulario de registro.
    -Evita que el formulario se envíe automáticamente cuando se hace clic en el botón de envío.
    -Comprueba si las contraseñas coinciden. Si no coinciden, muestra un mensaje de error.
    -Si coinciden, llama a la función mutate de registerMutation, que ejecuta la mutación para registrar al usuario.*/
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (password !== rePassword) {
        toast.error('Password does not match');
      } else {
        registerMutation.mutate();
      }
    };
  
    if (registerMutation.isLoading) return <p>Loading...</p>
    if(isAuth) return (<Navigate to='/'/>)
    
    
    

    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[800px] lg:py-0">
      <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src={Logo} alt="logo"/>
        <span>Shop Zone</span>
      </Link>
      <div className="w-full md:w-[400px] lg:w-[500px] bg-slate-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create a new account 
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"/>
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Last Name</label>
              <input 
              value={last_name}
              onChange={(e) => setLast_Name(e.target.value)}
              type="last_name" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name"/>
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
              <label htmlFor="re-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input 
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              type="password" name="re-password" id="re-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
          {match() ? null : <p className="text-sm font-medium text-red-500">Passwords must match</p>}
            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    )

}

export default RegisterPage