import React from "react";
import "../styles/general.css";
import "../styles/hobbies.css"
import gamingImage from "../images/gaming.png"
import aquarium from "../images/aquarium.jpg"
import reading from "../images/reading.webp"
import programming from "../images/programming.webp"

function Hobbies() {
    return (
        <div className="hobbies-container">
            <div className="postcard">
                <img src={gamingImage}></img>
                <div>
                    <p>Gaming</p>
                </div>
            </div>
            <div className="postcard">
                <img src={aquarium}></img>
                <p>Aquarist</p>
            </div>
            <div className="postcard">
                <img src={reading}></img>
                <p>Reading</p>
            </div>
            <div className="postcard">
                <img src={programming}></img>
                <p>Programming</p>
            </div>
        </div>
    )
}

export default Hobbies