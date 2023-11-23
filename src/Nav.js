import React, {useState} from "react";
import logo from "./assets/images/logo-main.svg";
import menuBurger from "./assets/images/icon-menu-burger.svg"
import { NavLink} from "react-router-dom";

function Nav () {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='logo'>
                    <img
                         src={logo}
                         alt='little lemon logo'/>
                </div>
                <div className='menu-icon' onClick={handleShowNav}>
                    <img src={menuBurger}
                         alt='Menu icon'/>
                </div>
                <div className={`nav-elements ${showNav && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reservation">Reservation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/orderonline">Order Online</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
 }
 export default Nav;