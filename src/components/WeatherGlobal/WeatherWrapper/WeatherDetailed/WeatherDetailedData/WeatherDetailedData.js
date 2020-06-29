import React from "react";
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

    const formatter = new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const sunrise = new Date(props.weather.sys.sunrise * 1000);
    const sunset = new Date(props.weather.sys.sunset * 1000);

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
                <p>{Math.round(props.weather.main.feels_like) + '\u00B0C'}</p>
            </li>
            <li>
                <h4>Clouds</h4>
                <p>{props.weather.clouds.all} %</p>
            </li>
            <li>
                <h4>Temp. min</h4>
                <p>{Math.round(props.weather.main.temp_min) + '\u00B0C'}</p>
            </li>
            <li>
                <h4>Temp. max</h4>
                <p>{Math.round(props.weather.main.temp_max) + '\u00B0C'}</p>
            </li>
            <li>
                <h4>Pressure</h4>
                <p>{props.weather.main.pressure} hPa</p>
            </li>
            <li>
                <h4>Humidity</h4>
                <p>{props.weather.main.humidity} %</p>
            </li>
            <li>
                <h4>Wind speed</h4>
                <p>{props.weather.wind.speed} mtr/sec</p>
            </li>
        </ul>
    )
}

export default WeatherDetailedData