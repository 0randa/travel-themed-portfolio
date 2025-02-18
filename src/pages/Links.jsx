import React from "react";
import Header from "../components/Header"
import "../styles/links.css"
import FlightboardRow from "../components/FlightboardRow.jsx"
import flight_board from "../data/flight_board.js"

function Links() {

    const flights = flight_board.map(flight => {
        return (
            <FlightboardRow 
                prop = {flight}
            />
        )
    })

    return (
        <div className="page-container">
            <Header />
            <div className="flightboard"></div>
            <div className="flightboard-header">
                <span>Time</span>
                <span>Flight</span>
                <span>To</span>
                <span>Gate</span>
                <span>Remarks</span>
            </div>
            {flights} 
            <hr></hr>
        </div>
    )
}

export default Links