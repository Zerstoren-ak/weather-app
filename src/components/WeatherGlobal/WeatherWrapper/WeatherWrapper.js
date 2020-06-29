import React, { useState } from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";

// const API_KEY = `30c1cbeda422363611d8892955df2a7a`;

function WeatherWrapper(props) {
    // const [weatherState, setWeatherState] = useState(
    //     {
    //         city: null,
    //         country: null,
    //         weather_description: null,
    //         temperature: null,
    //         sunrise: null,
    //         sunset: null,
    //         feels_like: null,
    //         clouds: null,
    //         temperature_max: null,
    //         temperature_min: null,
    //         pressure: null,
    //         humidity: null,
    //         wind_speed: null,
    //         id: null,
    //         error: null,
    //     });
    const [detailed, setDetailed] = useState(true);

    // const getWeather = useCallback(async () => {
    //     try {
    //         const city = props.city.name; //??
    //         const country = props.city.countryCode;
    //         const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${API_KEY}&units=metric`);
    //         const data = await get_api.json();
    //
    //         if (data.cod >= 400 && data.cod <= 499) {
    //             throw data.message;
    //         }
    //
    //         setWeatherState({
    //             city: data.name,
    //             country: data.sys.country,
    //             weather_description: data.weather[0].description,
    //             temperature: data.main.temp,
    //             sunrise: data.sys.sunrise,
    //             sunset: data.sys.sunset,
    //             feels_like: data.main.feels_like,
    //             clouds: data.clouds.all,
    //             temperature_max: data.main.temp_max,
    //             temperature_min: data.main.temp_min,
    //             pressure: data.main.pressure,
    //             humidity: data.main.humidity,
    //             wind_speed: data.wind.speed,
    //             id: data.id,
    //             error: data.message
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         toast.error(error,
    //             {
    //                 position: "bottom-center",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             }
    //         )
    //     }
    // }, [props.city.name, props.city.countryCode]);
    //
    // useEffect( () => {
    //     getWeather()
    // },[getWeather]);

    function toggleWeatherDetailed() {
        setDetailed(!detailed);
    }

    function weatherShort() {
        return(
            <WeatherShort
                city={props.city}
                weather={props.weather}
                // weatherState={weatherState} //!
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
                // weatherState={weatherState} //!
                clickHandlerMinify={toggleWeatherDetailed}
            />
        )
    }

    return (
        <>
            {detailed ? weatherShort() : weatherDetailed()}
        </>
    )
}

export default WeatherWrapper

