import "./NavBar.css"; 
import {NavLink} from "react-router-dom"
import { useAuth } from "../store/auth";
import { Login } from "../pages/Login";
import { Contact } from "../pages/Contact";
import { Register } from "../pages/Register";
import { useState } from "react";
export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalContact,setModalContact]=useState(false);
    const [isModalreg,setModalreg]=useState(false);
    const [isModalOpen,setIsModalOpen]=useState(false);
  const {isLoggedin}=useAuth();
    return ( 
      <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink onClick={() => setModalContact(true)}>Contact</NavLink>
            <Contact isOpen={isModalContact} onClose={() => setModalContact(false)} />
          </li>
          {isLoggedin ? (
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink onClick={() => setModalreg(true)}>Register</NavLink>
                <Register
                  isOpen={isModalreg}
                  onClose={() => setModalreg(false)}
                />
              </li>
              <li>
                <NavLink onClick={() =>setIsModalOpen(true)}>Login</NavLink>
                <Login
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </li>
            </>
          )}
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
};