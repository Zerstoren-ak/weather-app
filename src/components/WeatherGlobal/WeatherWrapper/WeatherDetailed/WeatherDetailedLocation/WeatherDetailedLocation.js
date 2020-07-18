import React from "react";
import './WeatherDetailedLocation.css'
import {degreePrettier} from "../../../../../utils/utils";

function WeatherDetailedLocation(props) {
    return (
            <div className={'location-detailed'}>
                <h2>{props.cityData.city}</h2>
                <h3>{props.cityData.country}</h3>
                <p className={'temperature'}>{degreePrettier(props.weatherData.temperature)}</p>
                <p className={'weather-description'}>{props.weatherData.description}</p>
            </div>
    )
}

export default WeatherDetailedLocation