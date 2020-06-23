import React, {useState, useLayoutEffect} from "react";

function Clock() {
    const[time, setTime] = useState(new Date());

    function tick() {
        setTime(new Date())
    }

    const formatter = new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
    });

    useLayoutEffect(() => {
            setInterval(tick, 30000)
        }
    );

    return (
        <p className={'Clock'}>
            {formatter.format(time)}
        </p>
    )
}

export default Clock