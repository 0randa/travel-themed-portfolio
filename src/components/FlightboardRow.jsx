import React from "react";
import "../styles/general.css";
import flight_board from "../data/flight_board";

function FlightboardRow(props) {
    console.log(props)

    return (
        <div className="flight-row">
            <span>{props.time}</span>
            <div className="flight-info">
                <img src={props.flight.img}></img>
                <span>{props.flight.number}</span>
            </div>
            <span>{props.destination}</span>
            <span>{props.gate}</span>
            <span>{props.remarks}</span>
        </div>
    )
}


export default FlightboardRow