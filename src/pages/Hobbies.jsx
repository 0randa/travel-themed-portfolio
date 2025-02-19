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
import chinaStamp from "../images/chinastamp.jpg"
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
                        <h3>Gaming</h3>
                        <p>Favourite Games</p>
                        <ul>
                            <li>Super Mario World - Timeless classic</li>
                            <li>Minecraft - Every Gen Z who grew up on YouTube had a Minecraft obsession at some point</li>
                            <li>Pokémon - Gotta catch em all</li>
                            <li>Stardew Valley - Very chill farming game</li>
                        </ul>
                    </div>
                    <div className="stamp-container">
                        <img className="stamp" src={ausStamp}></img>
                    </div>
                    
                </div>
                <div className="postcard">
                    <img src={aquarium}></img>
                    <div className="postcard-mid">
                        <h3>Aquarist</h3>
                        <p>Aquariums is a hobby where you raise your fish and manage your aquatic ecosystems.</p>
                        <p>I have a large fish tank filled with live plants, creating a natural habitat for my guppies to thrive and breed.
                        </p>
                    </div>
                    <div className="stamp-container">
                        <img className="stamp" src={chinaStamp}></img>
                    </div>
                </div>
                <div className="postcard">
                    <img src={reading}></img>
                    <div className="postcard-mid">
                        <h3>Reading</h3>

                        <p>
                            Favourite genres:
                            <li>
                                Fantasy
                            </li>
                            
                            <li>
                                Historical Fiction
                            </li>

                            <li>
                                Nonfiction
                            </li>

                        </p>
                        <p>
                            Favourite books:
                            <li>
                                Harry Potter series
                            </li>

                            <li>
                                A Life on Our Planet by David Attenborough
                            </li>
                        </p>

                        <p>
                            Currently reading:
                            <li>
                                Journey to the West
                            </li>
                        </p>
                    </div>
                    <div className="stamp-container">
                        <img className="stamp" src={japanStamp}></img>
                    </div>
                </div>
                <div className="postcard">
                    <img src={programming}></img>
                    <div className="postcard-mid">
                        <h3>Programming</h3>
                        <p>
                            As a CS student, it would come to no surprise that I have programming as a hobby xd.
                            During the break I was spending my free time learning the basics of HTML and CSS.
                        </p>

                        <p>
                            After creating a small project in HTML and CSS, I wanted to try to build this project 
                            in React to get comfortable with syntax.
                        </p>

                    </div>
                    <div className="stamp-container">
                        <img className="stamp" src={franceStamp}></img>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hobbies