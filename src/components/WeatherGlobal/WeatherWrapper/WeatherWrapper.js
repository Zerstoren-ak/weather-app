import React, { useState } from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";
import {Draggable} from "react-beautiful-dnd";
import './WeatherWrapper.css'

function WeatherWrapper(props) {
    const [detailed, setDetailed] = useState(true);

    function toggleWeatherDetailed() {
        setDetailed(!detailed);
    }

    function weatherShort() {
        return(
            <WeatherShort
                city={props.city}
                weather={props.weather}
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
                clickHandlerMinify={toggleWeatherDetailed}
            />
        )
    }

    function convertToString() {
        if (props.city.id) {
            return props.city.id.toString()
        }
    }

    return (
        <>
            <Draggable draggableId={convertToString()} index={props.index}>
                {provided =>
                    <div className={'WeatherWrapper'}
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        {detailed ? weatherShort() : weatherDetailed()}
                    </div>
                }
            </Draggable>
        </>
    )
}

export default WeatherWrapper

