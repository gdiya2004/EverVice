import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../store/auth";
import { Login } from "../pages/Login";
import { Contact } from "../pages/Contact";
import { Register } from "../pages/Register";
import { useState } from "react";
export const NavBar = () => {
  const {isLoggedin}=useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalreg,setModalreg]=useState(false);
  const [isModelContact,setModelcontact]=useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/"> Technical</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/service"> Services </NavLink>
              </li>
              <li>
                <button onClick={()=>setModelcontact(true)}>Contact</button>
                <Contact isOpen={isModelContact} onClose={()=>setModelcontact(false)}/>
              </li>
              {isLoggedin?<li>
                <NavLink to="/logout">Logout</NavLink>
              </li>:<>
              <li>
                <button onClick={()=>setModalreg(true)} >Register</button>
                <Register isOpen={isModalreg} onClose={()=>setModalreg(false)}/>
              </li>
              <li>
                <button onClick={()=>setIsModalOpen(true)}>Login</button>
                <Login isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
              </li>
              </>}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};