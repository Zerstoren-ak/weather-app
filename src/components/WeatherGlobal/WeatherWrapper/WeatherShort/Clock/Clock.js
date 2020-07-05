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
        if (props.sys) {
            let now = new Date();
            let utc_timestamp = now.getTime() + (now.getTimezoneOffset() * 60000);
            setTime(utc_timestamp + props.sys.timezone*1000);
            function tick() {
                setTime(time => time += 1000)
            }
            timer = setInterval(tick, 1000)
        }
        return ()=>{
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