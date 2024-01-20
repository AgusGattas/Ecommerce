/*En resumen, un "layout" en React es un componente que se utiliza para definir 
la estructura principal y la organización visual de una sección o página de una aplicación web.
la utilizamos despues en App.tsx*/
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

const Layout1 = () => {


  return (
      <div>
          <Toaster />
          <Header />
        <div className="min-h-[1000px] bg-white dark:bg-gray-900"> 
            <Outlet />
        </div>
      </div>
  )
}

export default Layout1