import React from "react";
import WeatherDetailedLocation from "./WeatherDetailedLocation/WeatherDetailedLocation";
import WeatherDetailedData from "./WeatherDetailedData/WeatherDetailedData";
import './WeatherDetailed.css'
import Button from "@material-ui/core/Button";

function WeatherDetailed(props) {
    return (
        <div className={'WeatherDetailed'}>
            <Button
                className={'weather-expand-minify'}
                onClick={props.clickHandlerMinify}
                variant="outlined"
                size="small"
                color="primary">
                minify
            </Button>
            <WeatherDetailedLocation
                cityData={props.cityData}
                weatherData={props.weatherData}
            />
            <WeatherDetailedData
                weatherData={props.weatherData}
            />
        </div>
    )
}

export default WeatherDetailed