import React from "react";
import "../styles/general.css";
import "../styles/links.css"
import flight_board from "../data/flight_board";
import { Link } from "react-router-dom";
import { BOARDING, GATES_OPEN, GATES_CLOSING } from "../data/constants";

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

function getRemarkColour(remark) {
    switch (remark) {
        case GATES_OPEN:
            return "#0074D9";
        case GATES_CLOSING:
            return "#FF4136";
        case BOARDING:
            return "#2ECC40";

        default:
            return "blue";
    }

}

function FlightboardRow(props) {
    const flightInfo = props.prop

    const destination = linkOrAnchor(flightInfo)
    const remarkColor = getRemarkColour(flightInfo.remarks);

    console.log(remarkColor)

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
            <div 
                className="remarks"
                style={{backgroundColor: remarkColor}}
            >
                <span>{flightInfo.remarks}</span>
            </div>
        </div>
    )
}


export default FlightboardRow