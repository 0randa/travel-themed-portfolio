import React from "react";
import "../styles/general.css";
import flight_board from "../data/flight_board";
import { Link } from "react-router-dom";

function FlightboardRow(props) {
    return (
        <div className="flight-row">
            <span>{props.time}</span>
            <div className="flight-info">
                <img src={props.flight.img}></img>
                <span>{props.flight.number}</span>
            </div>
            <span>
                <Link to={props.link}>
                    {props.destination}
                </Link>
            </span>
            <span>{props.gate}</span>
            <span>{props.remarks}</span>
        </div>
    )
}


export default FlightboardRow