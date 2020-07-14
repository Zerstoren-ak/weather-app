function degree(temperature) {
    return (
        Math.round(temperature) + '\u00B0C'
    )
}

function timeFormatter(time) {
    const formatter = new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return formatter.format(time);
}

export {degree, timeFormatter};