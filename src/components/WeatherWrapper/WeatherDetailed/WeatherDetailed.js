import React from "react";
import WeatherDetailedLocation from "./WeatherDetailedLocation/WeatherDetailedLocation";
import WeatherDetailedData from "./WeatherDetailedData/WeatherDetailedData";
import './WeatherDetailed.css'

function WeatherDetailed(props) {

    function handleClick() {
        props.clickHandler()
    }

    return (
        <div className={'WeatherDetailed'}>
            <button className={'minify'} onClick={handleClick}>minify</button>
            <WeatherDetailedLocation
                weatherState={props.weatherState}
            />
            <WeatherDetailedData
                weatherState={props.weatherState}
            />
        </div>
    )
}

export default WeatherDetailed