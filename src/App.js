import React, { Component } from "react";
import Form from "./Form/Form"
import WeatherShort from "./components/WeatherShort/WeatherShort";
import WeatherDetailed from "./components/WeatherDetailed/WeatherDetailed";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "./ReactToastify/ReactToastify.css"



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
        try {
            // const form = new FormData(this);
            const city = event.target.elements.city.value;  //??
            const country = event.target.elements.country.value;
            const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${API_KEY}&units=metric`);
            const data = await get_api.json();
            console.log(data);
            this.setState({
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
            console.log(error)
        }
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <Form getWeather={this.getWeather}/>
                <WeatherShort
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                />
                <ToastContainer />
            </div>
        )
    }
}

export default App;


