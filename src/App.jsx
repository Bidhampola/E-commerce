import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./navigations/Footer"
import Navbar from "./navigations/Navbar"
import Product from "./pages/Product"
import Login from "./authentication/Login"
import Register from "./authentication/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
