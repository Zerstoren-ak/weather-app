import React, {useState, useEffect} from "react";
import {timeFormatter} from "../../../../../utils/utils";

function Clock(props) {
    const [localTime, setLocalTime] = useState(0);

    useEffect(() => {
        let timer = null;
        if (props.weatherData.timezone) {
            let newDate = new Date();
            let utc_timestamp = newDate.getTime() + (newDate.getTimezoneOffset() * 60000);
            setLocalTime(utc_timestamp + props.weatherData.timezone * 1000);
            function tick() {
                setLocalTime(t => t += 1000)
            }
            timer = setInterval(tick, 1000)
        }
        return () => { //ComponentWillUnmount
            clearInterval(timer)
        }
    }, [props]);

    return (
        <p className={'Clock'}>
            {timeFormatter(localTime)}
        </p>
    )
}

export default Clock