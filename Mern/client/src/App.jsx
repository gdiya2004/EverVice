import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "../src/pages/Home"
import {About} from "../src/pages/About"
import {Contact} from "../src/pages/Contact"
import {Register} from "../src/pages/Register"
import {Service} from "../src/pages/Service"
import {Login} from "../src/pages/Login"
import {NavBar} from "../src/components/NavBar"
import {Error} from "../src/pages/Error"
import {Footer} from "../src/components/Footer"
import { Logout } from "./pages/Logout"
import {slides} from "./data/carouselData.json"
import { Carousel } from "./components/Carousel"
export const App=()=>{
  return(
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/logout" element={<Logout/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}