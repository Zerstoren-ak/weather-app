import React from "react";
import './WeatherDetailedLocation.css'

function WeatherDetailedLocation(props) {
    //             city: data.name,
    //             country: data.sys.country,
    //             weather_description: data.weather[0].description,
    //             temperature: data.main.temp,
    //             sunrise: data.sys.sunrise,
    //             sunset: data.sys.sunset,
    //             feels_like: data.main.feels_like,
    //             clouds: data.clouds.all,
    //             temperature_max: data.main.temp_max,
    //             temperature_min: data.main.temp_min,
    //             pressure: data.main.pressure,
    //             humidity: data.main.humidity,
    //             wind_speed: data.wind.speed,

    return (
            <div className={'location-detailed'}>
                <h2>{props.city.name}</h2>
                <h3>{props.city.country}</h3>
                <p className={'temperature'}>{Math.round(props.weather.main.temp) + '\u00B0C'}</p>
                <p className={'weather-description'}>{props.weather.weather[0].description}</p>
            </div>
    )
}

export default WeatherDetailedLocation