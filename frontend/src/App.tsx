import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout1 from "./components/layout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPages"
import AdminPage from "./pages/AdminPage"
import AddProductPage from "./pages/AddProductPage"
import { AdminPrivateRout, PrivateRout } from "./components/PrivateRoute"
import EditProductPage from "./pages/EditProductPage"
import SoloProduct from "./pages/SoloProduct"
import CatePage from "./pages/CatePage"
import SearchByCate from "./pages/SearchByCate"
import CartPage from "./pages/CartPage"



function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Layout1/>}>

              <Route index element= {<HomePage/>}/>
              <Route path="register" element= {<RegisterPage/>}/>
              <Route path="login" element= {<LoginPage/>}/>
              <Route path="home" element= {<HomePage/>}/>
              <Route path="product/:name" element= {<SoloProduct/>}/>
              <Route path="cate" element= {<CatePage/>}/>
              <Route path="cate/:cate" element={<SearchByCate />} />

            <Route element= {<PrivateRout/>}>
              <Route path="cart" element={<CartPage />} />
  
            </Route>

            <Route path="admin" element= {<AdminPrivateRout/>}>
              <Route index element= {<AdminPage/>}/>
              <Route path="add" element= {<AddProductPage/>}/>
              <Route path="edit/:id" element= {<EditProductPage/>}/>
            </Route>

          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
