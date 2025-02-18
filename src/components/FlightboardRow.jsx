import React from "react";
import "../styles/general.css";
import flight_board from "../data/flight_board";
import { Link } from "react-router-dom";

function linkOrAnchor(props) {
    // if its external make it an anchor
    if (props.external) {
        return (
            <a href={props.link} target="_blank">
                {props.destination}
            </a>
        )
    }

    return (
        <Link to={props.link}>
            {props.destination}
        </Link>
    )
}

function FlightboardRow(props) {
    const flightInfo = props.prop

    const destination = linkOrAnchor(flightInfo)

    return (
        <div className="flight-row">
            <span>{flightInfo.time}</span>
            <div className="flight-info">
                <img src={flightInfo.flight.img}></img>
                <span>{flightInfo.flight.number}</span>
            </div>
            <span>
                {destination}
            </span>
            <span>{flightInfo.gate}</span>
            <span>{flightInfo.remarks}</span>
        </div>
    )
}


export default FlightboardRow