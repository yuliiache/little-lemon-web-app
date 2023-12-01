import logo from "./assets/images/logo-vertical.png";
import {NavLink} from "react-router-dom";
import React from "react";


function Footer() {

    return (
        <footer className='footer'>
            <div className='footer-logo'>
                <img
                    src={logo}
                    alt='little lemon logo'/>
            </div>
            <div className='footer-links'>
                <div className='doormat-nav'>
                    <h2>Navigation</h2>
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
                </div>

                <div className='doormat-contact'>
                    <h2>Contact</h2>
                    <li>
                        <a href="https://maps.app.goo.gl/thpA5cDPNbcgQN4L8">Address</a>
                    </li>
                    <li>
                        <a href="tel:+1234567890">Phone</a>
                    </li>
                    <li>
                        <a href="mailto:info@littlelemon.com">Email</a>
                    </li>
                </div>

                <div className='doormat-social'>
                    <h2>Social Media</h2>
                    <li>
                        <a href="http://www.instagram.com/littlelemonrestaurant" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="http://www.facebook.com/littlelemonrestaurant" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com/littlelemonrestaurant" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
