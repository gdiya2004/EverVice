import { useState } from "react";
import "./NavBar.css"; 
import {NavLink} from "react-router-dom"
import { useAuth } from "../store/auth";
export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const {isLoggedin}=useAuth();
    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/service">Service</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                {isLoggedin?<li>
                <NavLink to="/logout">Logout</NavLink>
              </li>:<>
              <li>
                <NavLink to="/register"> Register </NavLink>
              </li>
              <li>
                <NavLink to="/login"> Login </NavLink>
              </li>
              </>}
            </ul>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

