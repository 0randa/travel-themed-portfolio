import React from "react";
import "../styles/general.css";
import "../styles/navlist.css";
import { Link } from "react-router-dom";

function NavigationList() {
    return (
        <div className="navlist-container">
            <ul>
                <li>
                    <Link to="/">
                        Home    
                    </Link>
                </li>
                <li>
                    <Link to="/Hobbies">
                        Hobbies
                    </Link>
                </li>
                <li>
                    <Link to="/Projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/Links">
                        Links
                    </Link>
                </li>
            </ul>
        </div>

    )

}

export default NavigationList