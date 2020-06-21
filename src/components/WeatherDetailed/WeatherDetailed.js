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
                city={props.city}
                country={props.country}
                temperature={props.temperature}
                weather_description={props.weather_description}
            />
            <WeatherDetailedData
                sunrise={props.sunrise}
                sunset={props.sunset}
                feels_like={props.feels_like}
                clouds={props.clouds}
                temperature_max={props.temperature_max}
                temperature_min={props.temperature_min}
                pressure={props.pressure}
                humidity={props.humidity}
                wind_speed={props.wind_speed}
            />
        </div>
    )

}

export default WeatherDetailed