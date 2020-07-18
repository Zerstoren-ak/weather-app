import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import FormCitySearch from "./FormCitySearch/FormCitySearch";

function FormCitySearchContainer({addCity, apiKey, toastSettings}) {
    const[cityData, setCityData] = useState( {});
    // const[weatherData, setWeatherData]= useState({});

    useEffect(() => {
        if (Object.entries(cityData).length !== 0) {
            console.log('FormCitySearch API data:', cityData);
            addCity([cityData]); //props return to WeatherGlobal
        }
        // eslint-disable-next-line
    },[cityData]);

    async function getCityByName(event) {
        event.preventDefault();
        try {
            const city = event.target.city.value;
            const country = event.target.country.value;
            event.target.city.value = ``;
            event.target.country.value = ``;
            const get_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${apiKey}&units=metric`);
            const data = await get_api.json();
            //from API- we get data for 1 city by name (and country code, but it not 'required')
            if (data.cod >= 400 && data.cod <= 499) {
                throw data.message;
            }
            setCityData({
                id: data.id,
                city: data.name,
                country: data.sys.country
            });

        } catch (error) {
            console.log(error);
            toast.error(error, toastSettings)
        }
    }

    return (
        <FormCitySearch handleForm={getCityByName}/>
    )
}

export default FormCitySearchContainer