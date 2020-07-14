import React from "react";
import {degree,timeFormatter} from "../../../../../utils/utils";
import './WeatherDetailedData.css'

function WeatherDetailedData(props) {
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

    const now = new Date();
    const toLocalTime = (now.getTimezoneOffset() * 60000) + (props.weatherData.timezone*1000);

    const sunrise = (props.weatherData.sunrise * 1000) + toLocalTime;
    const sunset = (props.weatherData.sunset * 1000) + toLocalTime;

    return (
        <ul>
            <li>
                <h4>Sunrise</h4>
                <p>{timeFormatter(sunrise)}</p>
            </li>
            <li>
                <h4>Sunset</h4>
                <p>{timeFormatter(sunset)}</p>
            </li>
            <li>
                <h4>Feels like</h4>
                <p>{degree(props.weatherData.feelsLike)}</p>
            </li>
            <li>
                <h4>Clouds</h4>
                <p>{props.weatherData.clouds} %</p>
            </li>
            <li>
                <h4>Temp. min</h4>
                <p>{degree(props.weatherData.temperatureMin)}</p>
            </li>
            <li>
                <h4>Temp. max</h4>
                <p>{degree(props.weatherData.temperatureMax)}</p>
            </li>
            <li>
                <h4>Pressure</h4>
                <p>{props.weatherData.pressure} hPa</p>
            </li>
            <li>
                <h4>Humidity</h4>
                <p>{props.weatherData.humidity} %</p>
            </li>
            <li>
                <h4>Wind speed</h4>
                <p>{props.weatherData.windSpeed} mtr/sec</p>
            </li>
        </ul>
    )
}

export default WeatherDetailedData