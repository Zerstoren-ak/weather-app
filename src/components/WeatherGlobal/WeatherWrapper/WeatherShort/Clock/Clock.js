import React, {useState, useEffect} from "react";

function Clock(props) {
    const [time, setTime] = useState(0);
    const formatter = new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    useEffect(() => {
        let timer = null;
        if (props.weather.sys) {
            let now = new Date();
            let utc_timestamp = now.getTime() + (now.getTimezoneOffset() * 60000);
            setTime(utc_timestamp + props.weather.sys.timezone * 1000);
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
            {formatter.format(time)}
        </p>
    )
}

export default Clock