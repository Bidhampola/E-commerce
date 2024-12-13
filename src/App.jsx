import Footer from "./navigations/Footer"
import Navbar from "./navigations/Navbar"
import Product from "./pages/Product"

function App() {
  return (
    <>
      <Navbar/>

      <h4 className="text-center mt-5 text-red-500">SHOP WITH US</h4>

      <Product/>


      <Footer/>
    </>
  )
}

export default App
