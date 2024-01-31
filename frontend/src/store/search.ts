import { create } from "zustand";

//Define una interfaz SearchStore que describe la forma del estado y las funciones que estarán disponibles.
interface SearchStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void; //es una función que toma un término de búsqueda (term) como argumento y no devuelve nada (void)
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),//define una función llamada setSearchTerm que toma un término como argumento y utiliza la función set para actualizar el estado del almacén. En este caso, actualiza searchTerm con el nuevo término.
}));