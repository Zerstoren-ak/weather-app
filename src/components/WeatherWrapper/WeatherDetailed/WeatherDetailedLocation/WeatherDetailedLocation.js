import React from "react";
import './WeatherDetailedLocation.css'

function WeatherDetailedLocation(props) {
    return (
            <div className={'location-detailed'}>
                <h2>{props.weatherState.city}</h2>
                <h3>{props.weatherState.country}</h3>
                <p className={'temperature'}>{Math.round(props.weatherState.temperature) + '\u00B0C'}</p>
                <p className={'weather-description'}>{props.weatherState.weather_description}</p>
            </div>
    )
}

export default WeatherDetailedLocation