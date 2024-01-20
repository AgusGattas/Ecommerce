//con este hook que creeamos podemos poner el modo oscuro o claro en la app

import { create } from 'zustand'; //la biblioteca zustand, que es una biblioteca de gestión de estado para React.create es una función proporcionada por zustand que se utiliza para crear un nuevo almacén de estado. 
import { persist } from 'zustand/middleware' //persist es un middleware proporcionado por zustand para agregar persistencia al estado. El middleware de persistencia permite que si recargamos la pagina no  perdamos los datos, se guardan en el local storage

interface DarkModeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkMode = create<DarkModeStore>()(
  persist(
    (set) => ({
      darkMode: true,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'theme', 
    }
  )
)