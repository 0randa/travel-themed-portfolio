import React from "react";
import "../styles/general.css";
import "../styles/hobbies.css"
import "../styles/navlist.css";
import Header from "../components/Header"
import NavigationList from "../components/NavigationList";
import gamingImage from "../images/gaming.png"
import aquarium from "../images/aquarium.jpg"
import reading from "../images/reading.webp"
import programming from "../images/programming.webp"
import ausStamp from "../images/postcard stamp.png"
import chinaStamp from "../images/chinaStamp.jpg"
import japanStamp from "../images/japanstamp.jpg"
import franceStamp from "../images/francestamp.jpg"

function Hobbies() {
    return (
        <>
            <Header />
            <NavigationList />
            <div className="hobbies-container">
                <div className="postcard">
                    <img src={gamingImage}></img>
                    <div className="postcard-mid">
                        <p>Gaming</p>
                        <p>Favourite Games</p>
                        <ul>
                            <li>Super Mario World</li>
                            <li>Minecraft</li>
                            <li>Pokémon</li>
                            <li>Stardew Valley</li>
                        </ul>
                    </div>
                    <img className="stamp" src={ausStamp}></img>
                    
                </div>
                <div className="postcard">
                    <img src={aquarium}></img>
                    <div className="postcard-mid">
                        <p>Aquarist</p>
                        <p>Aquariums is a hobby where you raise your fish and manage your aquatic ecosystems.</p>
                        <p>I have a large fish tank that is filled with large plants. My tank is inhabited by Guppies,
                            and they live in an environment that is closely resembled to their natural habitat where
                            they can breed and survive.
                        </p>
                    </div>
                    <img className="stamp" src={chinaStamp}></img>
                </div>
                <div className="postcard">
                    <img src={reading}></img>
                    <div className="postcard-mid">
                        <p>Reading</p>
                    </div>
                    <img className="stamp" src={japanStamp}></img>
                </div>
                <div className="postcard">
                    <img src={programming}></img>
                    <div className="postcard-mid">
                        <p>Programming</p>
                    </div>
                    <img className="stamp" src={franceStamp}></img>
                </div>
            </div>
        </>

    )
}

export default Hobbies