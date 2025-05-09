import { Route, Routes } from "react-router-dom";
import { About } from "../pages/about.jsx";
import { Product } from "../pages/product.jsx";
import { Contact } from "../pages/contact.jsx";
import { Home } from "../pages/home.jsx";
import { NavBar } from "./components/navBar.jsx";

const App = ()=> {
  
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/About' element= {<About/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path= "/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App;