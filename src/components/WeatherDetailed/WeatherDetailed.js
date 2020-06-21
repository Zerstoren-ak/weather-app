import React from "react";
import WeatherDetailedLocation from "./WeatherDetailedLocation/WeatherDetailedLocation";
import WeatherDetailedData from "./WeatherDetailedData/WeatherDetailedData";
import './WeatherDetailed.css'

function WeatherDetailed(props) {
    return (
        <div className={'WeatherDetailed'}>
            <WeatherDetailedLocation
                city={props.city}
                country={props.country}
                temperature={props.temperature}
            />
        </div>
    )

}

export default WeatherDetailed