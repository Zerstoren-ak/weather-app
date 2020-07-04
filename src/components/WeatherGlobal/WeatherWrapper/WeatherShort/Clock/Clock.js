import React, {useState, useEffect} from "react";

function Clock(props) {
    
    let now = new Date();
    let utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() ,
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    let time = new Date(utc_timestamp + (props.weather.sys.timezone * 1000));
    // function tick() {
    //         setTime(utc_timestamp + (props.weather.sys.timezone * 1000))
    // }

    const formatter = new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
    });

    // useEffect(() => {
    //         setInterval(tick, 30000)
    //     }
    // );

    return (
        <p className={'Clock'}>
            {formatter.format(time)}
        </p>
    )
}

export default Clock