import React from "react";
import { Link } from "react-router-dom";
import NavigationList from "../components/NavigationList"
import Header from "../components/Header"
import "../styles/links.css"
import FlightboardRow from "../components/FlightboardRow.jsx"
import flight_board from "../data/flight_board.js"

function Links() {

    const flights = flight_board.map(flight => {
        return (
            <FlightboardRow 
                time = {flight.time}
                flight = {flight.flight}
                destination = {flight.destination}
                gate = {flight.gate}
                remarks = {flight.remarks}
                link={flight.link}
            />
        )
    })

    return (
        <>
            <Header />
            <NavigationList />
            <div className="flightboard"></div>
            <div className="flightboard-header">
                <span>Time</span>
                <span>Flight</span>
                <span>To</span>
                <span>Gate</span>
                <span>Remarks</span>
            </div>
            {flights}

            
        </>
    )
}

export default Links