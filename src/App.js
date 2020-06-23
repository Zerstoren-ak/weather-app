import React, { Component } from "react";
import Form from "./Form/Form"
import WeatherShort from "./components/WeatherWrapper/WeatherShort/WeatherShort";
import WeatherDetailed from "./components/WeatherWrapper/WeatherDetailed/WeatherDetailed";
import { toast } from "react-toastify";
import "./App.css";

const API_KEY = `30c1cbeda422363611d8892955df2a7a`;

if (!localStorage.citiesList) {
    localStorage.citiesList = JSON.stringify([])
}

class App extends Component {

    state = {
        weatherState: {
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
            error: null,
            id:null,
        },

        citiesList: JSON.parse(localStorage.citiesList),
        detailed: false,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.citiesList = JSON.stringify(this.state.citiesList)
    }

    // componentDidMount() {
    //     this.getWeather()
    // }

    getWeather = async (event) => {
        event.preventDefault();
        try {
            // const form = new FormData(this);
            const city = event.target.elements.city.value;  //??
            const country = event.target.elements.country.value;
            const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${API_KEY}&units=metric`);
            const data = await get_api.json();
            console.log(data);

            if (data.cod >= 400 && data.cod <= 499) {
                throw data.message;
            }

            this.setState({
                weatherState: {
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
                    id: data.id,
                    error: ""
                }
            })
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
        console.log(this.state)
    };

    // shortList = this.state.citiesList.map((element, index) =>
    //     <WeatherShort key={index}
    //                   city={this.state.city}
    //                   country={this.state.country}
    //                   temperature={this.state.temperature}/>
    // );

    // addCity = (event) => {
    //     event.preventDefault();
    //     const city = event.target.elements.city.value;
    //     const country = event.target.elements.country.value;
    //     const id = this.state.id;
    //
    //     const newCitiesList = this.state.citiesList;
    //
    //     newCitiesList.push({name: city, country: country, id: id});
    //     this.setState({
    //         citiesList: newCitiesList
    //     });
    // };


    toggleWeatherDetailed = () => {
        this.setState({
            detailed: !this.state.detailed
        });
        console.log(this.state.detailed)
    };

    weatherDetailed = () => {
        return (
            <WeatherDetailed
                weatherState={this.state.weatherState}
                clickHandler={this.toggleWeatherDetailed}
            />
        )
    };


    weatherShort = () => {
        return (
            <WeatherShort
                weatherState={this.state.weatherState}
                clickHandler={this.toggleWeatherDetailed}
            />
        )
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <Form addCity={this.getWeather}/>
                {!this.state.detailed ? this.weatherShort() : this.weatherDetailed()}
            </div>
        )
    }
}

export default App;


