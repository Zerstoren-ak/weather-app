import React, {useState, useLayoutEffect} from "react";

function Clock() {
    const[time, setTime] = useState(new Date());

    function tick() {
        setTime(new Date())
    }

    useLayoutEffect(() => {
            setInterval(tick, 30000)
        }
    );

    return (
        <p className={'Clock'}>
            {time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
        </p>
    )
}

export default Clock