import React, {useEffect, useState} from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";
import {Draggable} from "react-beautiful-dnd";
import './WeatherWrapper.css';

function importAll(_require) {
    let videos = {};
    _require.keys().map((element) => {
        return(videos[element.replace('./', '')] = _require(element))
    });
    return videos;
}
const VIDEOS = importAll(require.context('./videos', false, /\.mp4/));

function WeatherWrapper(props) {
    const [toggleWeatherFlag, setToggleWeatherFlag] = useState(true);
    const [videoSource, setVideoSource] = useState(null);

    function toggleWeatherToShow() {
        setToggleWeatherFlag(!toggleWeatherFlag);
    }

    function createWeatherShort() {
        return(
            <WeatherShort
                cityData={props.cityData}
                weatherData={props.weatherData}
                clickHandlerExpand={toggleWeatherToShow}
                removeCity={props.clickHandlerRemove}
            />
        )
    }

    function createWeatherDetailed() {
        return (
            <WeatherDetailed
                cityData={props.cityData}
                weatherData={props.weatherData}
                clickHandlerMinify={toggleWeatherToShow}
            />
        )
    }

    function convertToString(_props) {
        if (_props) {
            return _props.toString()
        }
    }

    useEffect(() => {
        if (props.weatherData.description) {
            const weatherDescriptionAPI = props.weatherData.description;
            if (weatherDescriptionAPI === 'Rain') {
                setVideoSource(VIDEOS['Rain-day.mp4']);
            }
            if (weatherDescriptionAPI === 'Clear') {
                setVideoSource(VIDEOS['Sun.mp4']);
            }
            if (weatherDescriptionAPI === 'Clouds') {
                setVideoSource(VIDEOS['Clouds-day.mp4']);
            }
            if (weatherDescriptionAPI === 'Thunderstorm') {
                setVideoSource(VIDEOS['Thunderstorm-day.mp4']);
            }
            if (weatherDescriptionAPI === 'Drizzle') {
                setVideoSource(VIDEOS['Drizzle-day.mp4']);
            }
            if (weatherDescriptionAPI === 'Snow') {
                setVideoSource(VIDEOS['Snowfall.mp4']);
            }
            if (weatherDescriptionAPI === 'Fog'
                || weatherDescriptionAPI === 'Haze'
                || weatherDescriptionAPI === 'Mist') {
                setVideoSource(VIDEOS['Fog-day.mp4']);
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
                    <video autoPlay loop muted playsInline src={videoSource}></video>
                    {toggleWeatherFlag ? createWeatherShort() : createWeatherDetailed()}
                </div>
            }
        </Draggable>
    )
}

export default WeatherWrapper

