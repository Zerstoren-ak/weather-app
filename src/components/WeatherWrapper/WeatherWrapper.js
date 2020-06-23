import React, {Component} from "react";
import WeatherShort from "./WeatherShort/WeatherShort";
import WeatherDetailed from "./WeatherDetailed/WeatherDetailed";
import {toast} from "react-toastify";

const API_KEY = `30c1cbeda422363611d8892955df2a7a`;

class WeatherWrapper extends Component {

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
            id: null,
            error: null,
        },

        detailed: false,
    };

    componentDidMount() {
        this.getWeather();
    }

    getWeather = async () => {
        try {
            const city = this.props.city.name; //??
            const country = this.props.city.countryCode;
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


    toggleWeatherDetailed = () => {
        this.setState({
            detailed: !this.state.detailed
        });
        console.log(this.state.detailed)
    };

    weatherShort = () => {
        return(
        <WeatherShort
            weatherState={this.state.weatherState}
            clickHandler={this.toggleWeatherDetailed}
        />
        )
    };

    weatherDetailed = () => {
        return (
            <WeatherDetailed
                weatherState={this.state.weatherState}
                clickHandler={this.toggleWeatherDetailed}
            />
        )
    };

    render() {
        return (
            <>
                {!this.state.detailed ? this.weatherShort() : this.weatherDetailed()}
                {/*{this.props.children}*/}
            </>
        )
    }


}

export default WeatherWrapper

