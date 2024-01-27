import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout1 from "./components/layout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPages"
import AdminPage from "./pages/AdminPage"
import AddProductPage from "./pages/AddProductPage"
import { AdminPrivateRout, PrivateRout } from "./components/PrivateRoute"
import EditProductPage from "./pages/EditProductPage"



function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Layout1/>}>

            <Route index element= {<HomePage/>}/>
            <Route path="register" element= {<RegisterPage/>}/>
            <Route path="login" element= {<LoginPage/>}/>
            <Route path="home" element= {<HomePage/>}/>
            
            <Route element= {<PrivateRout/>}>
  
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
