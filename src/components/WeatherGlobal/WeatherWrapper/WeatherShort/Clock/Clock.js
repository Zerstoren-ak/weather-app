import React, {useState, useEffect} from "react";
import {timeFormatter} from "../../../../../utils/utils";

function Clock(props) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer = null;
        if (props.weatherData.timezone) {
            let now = new Date();
            let utc_timestamp = now.getTime() + (now.getTimezoneOffset() * 60000);
            setTime(utc_timestamp + props.weatherData.timezone * 1000);
            function tick() {
                setTime(t => t += 1000)
            }
            timer = setInterval(tick, 1000)
        }
        return () => { //ComponentWillUnmount
            clearInterval(timer)
        }
    }, [props]);

    return (
        <p className={'Clock'}>
            {timeFormatter(time)}
        </p>
    )
}

export default Clock