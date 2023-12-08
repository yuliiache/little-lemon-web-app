import React, {useState} from "react";
import logo from "../assets/images/logo-main.svg";
import menuBurger from "../assets/images/icon-menu-burger.svg"
import { NavLink} from "react-router-dom";

function Nav () {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    const closeNav = () => {
        setShowNav(false);
    }

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink onClick={closeNav} to="/">
                        <img
                            src={logo}
                            alt='little lemon logo'/>
                    </NavLink>
                </div>
                <div className='menu-icon' onClick={handleShowNav}>
                    <img src={menuBurger}
                         alt='Menu icon'/>
                </div>
                <div className={`nav-elements ${showNav && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink onClick={closeNav} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNav} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNav} to="/menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNav} to="/reservation">Reservation</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNav} to="/orderonline">Order Online</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNav} to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
 }
 export default Nav;