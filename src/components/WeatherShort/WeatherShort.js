import React from "react";
import Clock from "../Clock/Clock";
import "./WeatherShort.css"

function WeatherShort(props) {

   function handleClick() {
        props.clickHandler()
    }

    return (
        <div className={'WeatherShort'} onClick={handleClick}>
            <div>
                <Clock/>
                <div className={'location'}>
                    {props.city ? <h2>{props.city}</h2> : <h2>City</h2>}
                    {props.country ? <p>, {props.country}</p> : <p>, Country</p>}
                </div>
            </div>
            {props.temperature ? <h3>{Math.round(props.temperature) + '\u00B0C'}</h3> : <h3>t&deg;C</h3> }
        </div>
    )
}

export default WeatherShort