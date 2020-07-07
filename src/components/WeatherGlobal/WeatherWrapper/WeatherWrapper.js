import React, {useCallback, useEffect, useState} from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";
import {Draggable} from "react-beautiful-dnd";
import {CSSTransition} from "react-transition-group";
import './WeatherWrapper.css'
import Sunny from './video/Sun.mp4';
import Cloudy from './video/Clouds.mp4'
import Rainy from './video/Rain.mp4';
import Storm from './video/Storm.mp4'


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
        console.log('gjujlf', props.weather);
        if (props.weather.weather) {
            const APIDescription = props.weather.weather[0].main;
            console.log(APIDescription);
            if (APIDescription === 'Rain') {
                setVideoSource(Rainy);
            }
            if (APIDescription === 'Clear') {
                setVideoSource(Sunny);
            }
            if (APIDescription === 'Clouds') {
                setVideoSource(Cloudy);
            }
            if (APIDescription === 'Thunderstorm') {
                setVideoSource(Storm);
            }

        }
    }, [props]);


    // let videoSource = "https://vod-progressive.akamaized.net/exp=1594149170~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1094%2F15%2F380473795%2F1594271965.mp4~hmac=7c9baaf3a7f05db87d14ffab59a1c1e693af525d3c0eeb0704bf67a69e616bb4/vimeo-prod-skyfire-std-us/01/1094/15/380473795/1594271965.mp4?filename=Trees+-+30222.mp4";

            return (
            <>
            <Draggable draggableId={convertIdToString()} index={props.index}>
                {provided =>
                    <div className={'WeatherWrapper'}
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        <video autoPlay loop muted src={videoSource}>
                            {/*<source src={videoSource} type="video/mp4" />*/}
                        </video>
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

