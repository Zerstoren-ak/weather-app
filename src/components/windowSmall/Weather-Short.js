import React, { Component } from "react";
import "./Weather-Short.css"

const API_KEY = `30c1cbeda422363611d8892955df2a7a`;


class WeatherShort extends Component {

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
    componentDidMount = ()=>{
        this.getWeather()
    }
    getWeather = async () => {
        // const form = new FormData(this);
        const city = this.props.city.name
        const country = this.props.city.cc
        const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${API_KEY}&units=metric`)
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
    };
    handleClick = (e) => {
        this.props.onCityChange(this.state);
    }

    render() {
        return (
            <div className={'weather-block'} onClick={this.handleClick}>
                <div>
                    { this.state.city ? <h2>{this.state.city}</h2> : <h2>City</h2> }
                    { this.state.country ? <p>{this.state.country}</p> : <p>Country</p> }
                </div>
                { this.state.temperature ? <h3>{Math.round(this.state.temperature) + '\u00B0C'}</h3> : "" }
            </div>
        )
    }
}

export default WeatherShort