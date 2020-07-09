import React, {useEffect, useState} from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";
import {Draggable} from "react-beautiful-dnd";
// import {CSSTransition} from "react-transition-group";
import './WeatherWrapper.css'
import Sun from './video/Sun.mp4';
import Clouds from './video/Clouds-day.mp4';
import Rain from './video/Rain-day.mp4';
import Thunderstorm from './video/Thunderstorm-day.mp4';
import Snow from './video/Snowfall.mp4';
import Drizzle from './video/Drizzle-day.mp4';
import Fog from './video/Fog-day.mp4'


function WeatherWrapper(props) {
    const [detailed, setDetailed] = useState(true);
    // const [showWeatherShort, setSHowWeatherShort] = useState(true);
    // const [showWeatherDetailed, setShowWeatherDetailed] = useState(false);

    const [videoSource, setVideoSource] = useState(null);

    function toggleWeatherDetailed() {
        setDetailed(!detailed);
    }

    function weatherShort() {
        if(props.weather.timezone) {
            props.weather.sys.timezone = props.weather.timezone
        }

        return(
            <WeatherShort
                city={props.city}
                weather={props.weather}
                // clickHandlerExpand={() => setShowWeatherDetailed(true)}
                clickHandlerExpand={toggleWeatherDetailed}
                clickHandlerRemove={props.clickHandlerRemove}
            />
        )
    }

    function weatherDetailed() {
        return (
            <WeatherDetailed
                city={props.city}
                weather={props.weather}
                // clickHandlerMinify={() => setShowWeatherDetailed(false)}
                clickHandlerMinify={toggleWeatherDetailed}
            />
        )
    }

    function convertIdToString() {
        if (props.city.id) {
            return props.city.id.toString()
        }
    }

    useEffect(() => {
        if (props.weather.weather) {
            const APIDescription = props.weather.weather[0].main;
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
            <>
            <Draggable draggableId={convertIdToString()} index={props.index}>
                {provided =>
                    <div className={'WeatherWrapper'}
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        <video autoPlay loop muted src={videoSource}></video>
                        {detailed ? weatherShort() : weatherDetailed()}
                        {/*{showWeatherShort && weatherShort()}*/}
                        {/*<CSSTransition*/}
                        {/*    in={showWeatherDetailed}*/}
                        {/*    timeout={500}*/}
                        {/*    classNames="transition-item-detailed"*/}
                        {/*    unmountOnExit*/}
                        {/*    onEnter={() => setSHowWeatherShort(false)}*/}
                        {/*    onExited={() => setSHowWeatherShort(true)}*/}
                        {/*>*/}
                        {/*    {weatherDetailed()}*/}
                        {/*</CSSTransition>*/}
                    </div>
                }
            </Draggable>
        </>
    )
}

export default WeatherWrapper

