import React from "react";
import Clock from "../../Clock/Clock";
import "./WeatherShort.css"

function WeatherShort(props) {

    console.log(props.weatherState);
    return (
        <div className={'WeatherShort'} onClick={props.clickHandler}>
            <div>
                <Clock/>
                <div className={'location'}>
                    {props.weatherState.city ? <h2>{props.weatherState.city}</h2> : <h2>City</h2>}
                    {props.weatherState.country ? <p>, {props.weatherState.country}</p> : <p>, Country</p>}
                </div>
            </div>
            {props.weatherState.temperature ? <h3>{Math.round(props.weatherState.temperature) + '\u00B0C'}</h3> : <h3>t&deg;C</h3> }
        </div>
    )
}

export default WeatherShort