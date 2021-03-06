import React from "react";
import Clock from "./Clock/Clock";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import "./WeatherShort.css"
import Button from "@material-ui/core/Button";
import {degreePrettier} from "../../../../utils/utils";

function WeatherShort(props) {
    return (
        <div className={'WeatherShort'}>
            <div>
                <Clock weatherData={props.weatherData}/>
                <div className={'location'}>
                    <h2>{props.cityData.city}</h2>
                    <p>, {props.cityData.country}</p>
                </div>
            </div>
            {!props.weatherData ? <h3>t&deg;C</h3>  : <h3>{degreePrettier(props.weatherData.temperature)}</h3>  }
            <IconButton className={'weather-remove'} aria-label="delete" onClick={props.removeCity}>
                <DeleteIcon fontSize="small" />
            </IconButton>
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