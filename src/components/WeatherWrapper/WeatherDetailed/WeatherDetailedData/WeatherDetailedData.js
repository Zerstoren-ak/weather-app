import React from "react";
import './WeatherDetailedData.css'

function WeatherDetailedData(props) {

    const formatter = new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const sunrise = new Date(props.weatherState.sunrise * 1000);
    const sunset = new Date(props.weatherState.sunset * 1000);

    return (
        <ul>
            <li>
                <h4>Sunrise</h4>
                <p>{formatter.format(sunrise)}</p>
            </li>
            <li>
                <h4>Sunset</h4>
                <p>{formatter.format(sunset)}</p>
            </li>
            <li>
                <h4>Feels like</h4>
                <p>{Math.round(props.weatherState.feels_like) + '\u00B0C'}</p>
            </li>
            <li>
                <h4>Clouds</h4>
                <p>{props.weatherState.clouds} %</p>
            </li>
            <li>
                <h4>Temp. min</h4>
                <p>{Math.round(props.weatherState.temperature_min) + '\u00B0C'}</p>
            </li>
            <li>
                <h4>Temp. max</h4>
                <p>{Math.round(props.weatherState.temperature_max) + '\u00B0C'}</p>
            </li>
            <li>
                <h4>Pressure</h4>
                <p>{props.weatherState.pressure} hPa</p>
            </li>
            <li>
                <h4>Humidity</h4>
                <p>{props.weatherState.humidity} %</p>
            </li>
            <li>
                <h4>Wind speed</h4>
                <p>{props.weatherState.wind_speed} mtr/sec</p>
            </li>
        </ul>
    )
}

export default WeatherDetailedData