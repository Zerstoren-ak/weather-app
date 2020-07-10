import React, {Component, useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {toast} from "react-toastify";
import './FormCitySearch.css'

function FormCitySearch(props) {
    // const[cityData, setCityData] = useState( {});
    // const[weatherData, setWeatherData]= useState({});

    async function handleForm(event) {
        event.preventDefault();
        try {
            const city = event.target.city.value;
            const country = event.target.country.value;
            event.target.city.value = ``;
            event.target.country.value = ``;
            const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${props.apiKey}&units=metric`);
            const data = await get_api.json();
            //from API- we get data for 1 city by name (and country code, but it not 'required')
            if (data.cod >= 400 && data.cod <= 499) {
                throw data.message;
            }
            console.log(data);
            const cityData = {
                id: data.id,
                name: data.name,
                country: data.sys.country
            };
            // let cityInfo = JSON.parse(JSON.stringify(cityData));
            // let cityInfo = ;
            // setCityData(() => ({ id: data.id,
            //     name: data.name,
            //     country: data.sys.country,}));
            console.log(cityData);
            const weatherData = data;


            // console.log('form array made:', [cityData, weatherData]);
            // props.timezone = props.sys.timezone;
            props.addCity([cityData, weatherData])

        } catch (error) {
            console.log(error);
            toast.error(error,
                {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            )
        }
    }

    return (
        <form className={"search-form"} onSubmit={handleForm}>
            <TextField
                className={"data-input"}
                required type={"text"}
                name={"city"}
                id="outlined-basic"
                label="City..."
                variant="outlined"
            />
            <TextField
                className={"data-input"}
                type={"text"} name={"country"}
                id="outlined-basic"
                label="Country code..."
                variant="outlined"
            />
            <Button
                className={"data-submit"}
                type={onsubmit}
                variant="outlined"
                size="medium"
                color="primary"
            >
                Get Weather
            </Button>
        </form>
    )
}

export default FormCitySearch