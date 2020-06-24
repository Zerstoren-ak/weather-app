import React from "react";
import Clock from "../../Clock/Clock";
import "./WeatherShort.css"

function WeatherShort(props) {

    return (
        <div className={'WeatherShort'} onClick={props.clickHandlerExpand}>
            <div>
                <Clock/>
                <div className={'location'}>
                    {props.weatherState.city ? <h2>{props.weatherState.city}</h2> : <h2>City</h2>}
                    {props.weatherState.country ? <p>, {props.weatherState.country}</p> : <p>, Country</p>}
                </div>
            </div>
            {props.weatherState.temperature ? <h3>{Math.round(props.weatherState.temperature) + '\u00B0C'}</h3> : <h3>t&deg;C</h3> }
            <button onClick={props.clickHandlerRemove}>X</button>
        </div>
    )
}

export default WeatherShort