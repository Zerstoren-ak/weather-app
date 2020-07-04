import React from "react";
import Clock from "./Clock/Clock";
import "./WeatherShort.css"

function WeatherShort(props) {
    console.log('WeatherShort received props', props.city);
    return (
        <div className={'WeatherShort'}>
            <div>
                <Clock/>
                <div className={'location'}>
                    <h2>{props.city.name}</h2>
                    <p>, {props.city.country}</p>
                </div>
            </div>
            {!props.weather ? <h3>t&deg;C</h3>  : <h3>{Math.round(props.weather.main.temp) + '\u00B0C'}</h3>  }
            <button className={'weather-remove'} onClick={props.clickHandlerRemove}>X</button>
            <button className={'weather-expand'} onClick={props.clickHandlerExpand}>expand</button>
        </div>
    )
}

export default WeatherShort