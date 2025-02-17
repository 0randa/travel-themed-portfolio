import React from "react";
import "../styles/general.css";
import "../styles/projects.css"
import Header from "../components/Header";
import NavigationList from "../components/NavigationList";

import discordImg from "../images/discord_img.jpg"
import gitHubLogo from "../images/github_logo.png"
import ecommerceImg from "../images/ecommerce_example.jpg"
import devSocLogo from "../images/devsoc_logo.png"

function Projects() {
    return (
        <>
            <Header />
            <NavigationList />
            <main className="journal-container">
                <article className="journal-entry">
                    <div className="main-image-container">
                        <img src={discordImg}></img>

                    </div>
                    <div className="info-container">
                        <img src={gitHubLogo}></img>
                        <span>Python</span>
                        <a href="https://github.com/0randa/aquarium_bot" target="_blank">GitHub Link</a>
                        <h2>Discord Bot</h2>
                        <p>November 2024 - Present</p>
                        <p>This bot developed using PyCord to allow users to raise fish and simulate their own aquatic ecosystems.</p>
                    </div>
                </article>

                <article className="journal-entry">
                    <div className="main-image-container">
                        <img src={ecommerceImg}></img>

                    </div>
                    <div className="info-container">
                        <img src={gitHubLogo}></img>
                        <span>HTML/CSS and Vanilla JS</span>
                        <a href="https://github.com/0randa/guppy-site" target="_blank">GitHub Link</a>
                        <h2>Minimalistic E-Commerce website</h2>
                        <p>December 2024 - Late January 2025</p>
                        <p>Developed an e-commerce website that has features such as adding and removing items to the cart, and checking out.</p>
                    </div>
                </article>

                <article className="journal-entry">
                    <div className="main-image-container">
                        <img src={devSocLogo}></img>

                    </div>
                    <div className="info-container">
                        <img src={gitHubLogo}></img>
                        <span>React + Vite</span>
                        <a href="https://github.com/0randa/aquarium_bot">GitHub Link</a>
                        <h2>DevSov Trainee Portfolio</h2>
                        <p>January 2025 - February 2025</p>
                        <p>Developing a portfolio website with the theme "Around the World". Experimenting with React after learning it.</p>
                    </div>
                </article>
               
            </main>
        </>
    )
}

export default Projects