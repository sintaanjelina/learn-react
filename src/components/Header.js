import React from "react"
import "../style.css"
import logo from "../assets/img/react-logo.svg"

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <div>
                    <img className="nav--logo" src={logo} />
                    <h3 className="nav--logo_text">React</h3>
                </div>
                <h3 className="nav--items">Course : Project 1</h3>
                <ul className="nav--items" >
                    <li> Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;