import React, { useState } from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";
import {Draggable} from "react-beautiful-dnd";
import {CSSTransition} from "react-transition-group";
import './WeatherWrapper.css'

function WeatherWrapper(props) {
    // const [detailed, setDetailed] = useState(true);
    const [showWeatherShort, setSHowWeatherShort] = useState(true);
    const [showWeatherDetailed, setShowWeatherDetailed] = useState(false);

    // function toggleWeatherDetailed() {
    //     setDetailed(!detailed);
    // }

    function weatherShort() {
        if(props.weather.timezone) {
            props.weather.sys.timezone = props.weather.timezone
        }

        return(
            <WeatherShort
                city={props.city}
                weather={props.weather}
                clickHandlerExpand={() => setShowWeatherDetailed(true)}
                clickHandlerRemove={props.clickHandlerRemove}
            />
        )
    }

    function weatherDetailed() {
        return (
            <WeatherDetailed
                city={props.city}
                weather={props.weather}
                clickHandlerMinify={() => setShowWeatherDetailed(false)}
            />
        )
    }

    function convertIdToString() {
        if (props.city.id) {
            return props.city.id.toString()
        }
    }

    return (
        <>
            <Draggable draggableId={convertIdToString()} index={props.index}>
                {provided =>
                    <div className={'WeatherWrapper'}
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        {/*{detailed ? weatherShort() : weatherDetailed()}*/}
                        {showWeatherShort && weatherShort()}
                        <CSSTransition
                            in={showWeatherDetailed}
                            timeout={500}
                            classNames="transition-item-detailed"
                            unmountOnExit
                            onEnter={() => setSHowWeatherShort(false)}
                            onExited={() => setSHowWeatherShort(true)}
                        >
                            {weatherDetailed()}
                        </CSSTransition>
                    </div>
                }
            </Draggable>
        </>
    )
}

export default WeatherWrapper

