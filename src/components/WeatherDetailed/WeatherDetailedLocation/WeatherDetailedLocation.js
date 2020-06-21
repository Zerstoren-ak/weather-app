import React from "react";
import './WeatherDetailedLocation.css'

function WeatherDetailedLocation(props) {
    return (
            <div className={'location-detailed'}>
                <h2>{props.city}</h2>
                <h3>{props.country}</h3>
                <p>{Math.round(props.temperature) + '\u00B0C'}</p>
                <p className={'weather-description'}>{props.weather_description}</p>
            </div>
    )
}

export default WeatherDetailedLocation