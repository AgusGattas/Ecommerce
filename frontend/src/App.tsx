import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout1 from "./components/layout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPages"
import AdminPage from "./pages/AdminPage"
import AddProductPage from "./pages/AddProductPage"


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Layout1/>}>
            <Route index element= {<HomePage/>}/>
            <Route path="register" element= {<RegisterPage/>}/>
            <Route path="login" element= {<LoginPage/>}/>
            <Route path="home" element= {<HomePage/>}/>
            <Route path="admin" element= {<AdminPage/>}/>
            <Route path="add" element= {<AddProductPage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
