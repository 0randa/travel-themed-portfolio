import React from "react";
import "../styles/boarding_ticket.css";
import "../styles/general.css";
import planeLogo from "../images/plane_logo.png";
import rightArrow from "../images/right_arrow.png";
import takeoffPlane from "../images/takeoff_plane.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-left-column">
        <img src={planeLogo} alt="Plane Logo" />
        <p>Keritas Airlines</p>
        <p>Boarding Pass</p>
      </div>
      <div className="header-right-column">
        <p>Destinations</p>
      </div>
    </div>
  );
}

function FlightDetails() {
  return (
    <div className="middle-section-top-row">
      <div className="top-row-boxes">
        <p className="from-to">FROM:</p>
        <p className="airports">Sydney Airport</p>
        <p className="airports">Sydney</p>
        <p className="time">15 Jan 2025</p>
        <p className="time">9:30 AM</p>
      </div>
      <div className="top-row-boxes">
        <img src={rightArrow} alt="Right Arrow" />
        <img src={takeoffPlane} alt="Takeoff Plane" />
      </div>
      <div className="top-row-boxes">
        <p className="from-to">TO:</p>
        <p className="airports">DevSov Trainee Program</p>
        <p className="airports">UNSW</p>
        <p className="time">15 Jan 2025</p>
        <p className="time">11:00 AM</p>
      </div>
    </div>
  );
}

function PassengerDetails() {
  return (
    <div className="middle-section-bottom-row">
      <div className="bottom-row-boxes"><p>Name:</p><p>Andy</p></div>
      <div className="bottom-row-boxes"><p>Pronouns:</p><p>He/Him</p></div>
      <div className="bottom-row-boxes"><p>Degree:</p><p>Computer Science</p></div>
      <div className="bottom-row-boxes"><p>Year:</p><p>2nd</p></div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="middle-section-right-column">
      <p>
        <Link to="/">Home</Link>
      </p>

      <p>
        <Link to="/hobbies">Hobbies</Link>
      </p>

      <p>
        <Link to="/projects">Projects</Link>
      </p>

      <p>
        <Link to="/links">Links</Link>
      </p>
    </div>
  );
}

function BoardingPass() {
  return (
    <div className="center-container">
      <div className="boarding-pass">
        <Header />
        <div className="middle-section">
          <div className="middle-section-left-column">
            <FlightDetails />
            <PassengerDetails />
          </div>
          <Navigation />
        </div>
        <div className="bottom-section">
          <div></div>
          <div className="bottom-section-right-column"><p></p></div>
        </div>
      </div>
    </div>
  );
}

export default BoardingPass;
