/*En resumen, un "layout" en React es un componente que se utiliza para definir 
la estructura principal y la organización visual de una sección o página de una aplicación web.
la utilizamos despues en App.tsx*/
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import { useSearchStore } from '../store/search';
import SearchResult from '../pages/SearchResults';

const Layout1 = () => {

  const searchTerm = useSearchStore((state)=>state.searchTerm)

  /*
  if (searchTerm !== ''){
    restultados
  }
  else{
    outlet
  }*/
  return (
      <div>
          <Toaster />
          <Header />
        <div className="min-h-[1000px] bg-white dark:bg-gray-900"> 
        {searchTerm !== '' ?(
        <SearchResult />
        ) : (
        <Outlet />
        )}
            
        </div>
      </div>
  )
}

export default Layout1