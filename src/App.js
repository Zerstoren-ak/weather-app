import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

import WeatherShort from "./components/windowSmall/Weather-Short";
import Form from "./components/Form"

import "./App.css";

const API_KEY = `30c1cbeda422363611d8892955df2a7a`;

function App(props) {

  const [currentCity, setCurrentCity] = useState({
    city: null,
    country: null,
    weather_description: null,
    temperature: null,
    sunrise: null,
    sunset: null,
    feels_like: null,
    clouds: null,
    temperature_max: null,
    temperature_min: null,
    pressure: null,
    humidity: null,
    wind_speed: null,
    error: null
  })

  const getWeather = async (city, country) => {
    try {
      // const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${API_KEY}&units=metric`)

      const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: `${city},${country ? country : ''}`,
          appid: API_KEY,
          units: 'metric'
        }
      });
      console.log(response);
      const { data } = response;

      // const data = await get_api.json();
      console.log("data from http://api.openweathermap.org", data);

      setCurrentCity({
        city: data.name,
        country: data.sys.country,
        weather_description: data.weather[0].description,
        temperature: data.main.temp,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        feels_like: data.main.feels_like,
        clouds: data.clouds.all,
        temperature_max: data.main.temp_max,
        temperature_min: data.main.temp_min,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        error: ""
      })
    } catch (error) {
      console.error("error: ", error);
      console.error("keys: ", Object.keys(error));
      console.error("values: ", Object.values(error));
      console.error("error.response.data: ", error.response.data);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="App">
      <h1>Hello, I'm weather app</h1>
      <Form getWeather={getWeather} />
      <WeatherShort
        city={currentCity.city}
        country={currentCity.country}
        temperature={currentCity.temperature}
        onClick={() => console.log("dsd")}
      />
    </div>
  )
}

export default App;


