import React from "react";
import Clock from "./Clock/Clock";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import "./WeatherShort.css"
import Button from "@material-ui/core/Button";

function WeatherShort(props) {
    console.log('WeatherShort received props', props.city);
    return (
        <div className={'WeatherShort'}>
            <div>
                <Clock sys={props.weather.sys}/>
                <div className={'location'}>
                    <h2>{props.city.name}</h2>
                    <p>, {props.city.country}</p>
                </div>
            </div>
            {!props.weather ? <h3>t&deg;C</h3>  : <h3>{Math.round(props.weather.main.temp) + '\u00B0C'}</h3>  }
            {/*<button className={'weather-remove'} onClick={props.clickHandlerRemove}>X</button>*/}
            <IconButton className={'weather-remove'} aria-label="delete" onClick={props.clickHandlerRemove}>
                <DeleteIcon fontSize="small" />
            </IconButton>
            {/*<button className={'weather-expand'} onClick={props.clickHandlerExpand}>expand</button>*/}
            <Button
                className={'weather-expand-minify'}
                onClick={props.clickHandlerExpand}
                variant="outlined"
                size="small"
                color="primary">
                expand
            </Button>
        </div>
    )
}

export default WeatherShort