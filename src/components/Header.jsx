import React from "react";
import "../styles/general.css";
import aeroplane from "../images/plane_logo.png"

function Header() {
    return (
        <header>
            <img src={aeroplane}></img>
            <h2>Keritas airlines</h2>
        </header>
    )
}

export default Header