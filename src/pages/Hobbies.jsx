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
                        <p>Gaming</p>
                        <p>Favourite Games</p>
                        <ul>
                            <li>Super Mario World</li>
                            <li>Minecraft</li>
                            <li>Pokémon</li>
                            <li>Stardew Valley</li>
                        </ul>
                    </div>
                    <div className="stamp-container">
                        <img className="stamp" src={ausStamp}></img>
                    </div>
                    
                </div>
                <div className="postcard">
                    <img src={aquarium}></img>
                    <div className="postcard-mid">
                        <p>Aquarist</p>
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
                        <p>Reading</p>

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
                        <p>Programming</p>
                        <p>
                            As a CS student, it would come to no surprise that I have programming as a hobby xd.
                            I am interested in high level programming languages such as Javascript and Python, due to
                            their extensive libraries.
                        </p>

                        <p>
                            As of creating this project, I am also learning react, after learning HTML and CSS, to enrich
                            my understanding of frontend programming.
                        </p>

                        <p>Feel free to explore my personal projects by clicking "projects" on the navigation bar</p>
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