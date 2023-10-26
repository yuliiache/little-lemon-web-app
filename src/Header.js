import React from "react";
import logo from "./assets/images/Logo .svg"

function Header() {
    return(
        <header>
            <img className="logo"
            src={logo}
            alt='little lemon logo'/>
        </header>
    )
}

export default Header;