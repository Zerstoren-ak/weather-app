import React, { Component } from "react";
import "./App.css";

import WeatherShort from "./components/windowSmall/Weather-Short";
import Form from "./components/Form"

const API_KEY = `30c1cbeda422363611d8892955df2a7a`;

class App extends Component {

    state = {
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
    };

    getWeather = async (event) => {
        event.preventDefault();
        // const form = new FormData(this);
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${API_KEY}&units=metric`)
        const data = await get_api.json();
        console.log(data);
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <Form getWeather={this.getWeather}/>
                <WeatherShort />
            </div>
        )
    }
}

export default App;


