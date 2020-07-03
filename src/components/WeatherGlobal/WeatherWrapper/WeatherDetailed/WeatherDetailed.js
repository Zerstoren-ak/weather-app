import React from "react";
import WeatherDetailedLocation from "./WeatherDetailedLocation/WeatherDetailedLocation";
import WeatherDetailedData from "./WeatherDetailedData/WeatherDetailedData";
import './WeatherDetailed.css'

function WeatherDetailed(props) {

    return (
        <div className={'WeatherDetailed'}>
            <button className={'minify'} onClick={props.clickHandlerMinify}>minify</button>
            <WeatherDetailedLocation
                city={props.city}
                weather={props.weather}
            />
            <WeatherDetailedData
                weather={props.weather}
            />
        </div>
    )
}

export default WeatherDetailed