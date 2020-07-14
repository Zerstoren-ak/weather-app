import React, {useEffect, useState} from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";
import {Draggable} from "react-beautiful-dnd";
import './WeatherWrapper.css';
import Sun from './video/Sun.mp4';
import Clouds from './video/Clouds-day.mp4';
import Rain from './video/Rain-day.mp4';
import Thunderstorm from './video/Thunderstorm-day.mp4';
import Snow from './video/Snowfall.mp4';
import Drizzle from './video/Drizzle-day.mp4';
import Fog from './video/Fog-day.mp4';


function WeatherWrapper(props) {
    const [detailed, setDetailed] = useState(true);
    const [videoSource, setVideoSource] = useState(null);

    function toggleWeatherDetailed() {
        setDetailed(!detailed);
    }

    function weatherShort() {
        return(
            <WeatherShort
                cityData={props.cityData}
                weatherData={props.weatherData}
                clickHandlerExpand={toggleWeatherDetailed}
                removeCity={props.clickHandlerRemove}
            />
        )
    }

    function weatherDetailed() {
        return (
            <WeatherDetailed
                cityData={props.cityData}
                weatherData={props.weatherData}
                clickHandlerMinify={toggleWeatherDetailed}
            />
        )
    }

    function convertToString(props) {
        if (props) {
            return props.toString()
        }
    }

    useEffect(() => {
        if (props.weatherData.description) {
            const APIDescription = props.weatherData.description;
            if (APIDescription === 'Rain') {
                setVideoSource(Rain);
            }
            if (APIDescription === 'Clear') {
                setVideoSource(Sun);
            }
            if (APIDescription === 'Clouds') {
                setVideoSource(Clouds);
            }
            if (APIDescription === 'Thunderstorm') {
                setVideoSource(Thunderstorm);
            }
            if (APIDescription === 'Drizzle') {
                setVideoSource(Drizzle);
            }
            if (APIDescription === 'Snow') {
                setVideoSource(Snow);
            }
            if (APIDescription === 'Fog') {
                setVideoSource(Fog);
            }
        }
    }, [props]);

    return (
        <Draggable draggableId={convertToString(props.cityData.id)} index={props.index}>
            {provided =>
                <div className={'WeatherWrapper'}
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                >
                    <video autoPlay loop muted src={videoSource}></video>
                    {detailed ? weatherShort() : weatherDetailed()}
                </div>
            }
        </Draggable>
    )
}

export default WeatherWrapper

