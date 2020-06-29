import React, {Component} from "react";
import Form from "./Form/Form"
import WeatherWrapper from "./WeatherWrapper/WeatherWrapper";
import {toast} from "react-toastify";

if (!localStorage.citiesList) {
    localStorage.citiesList = JSON.stringify({})
}

const API_KEY = `30c1cbeda422363611d8892955df2a7a`;

class WeatherGlobal extends Component {
    state = {
        citiesList: JSON.parse(localStorage.citiesList),
        weatherList: []
    };

    addCity = (data) => {
        let savedCities = this.state.citiesList;
        if (!savedCities[data[0].id]) {
            savedCities[data[0].id] = data[0];
            let newWeatherList = this.state.weatherList;
            newWeatherList.push(data[1]);
            this.setState({
                citiesList: savedCities,
                weatherList: newWeatherList
            })
        }
    };

    componentDidMount() {
        this.getWeather()
    }

    getWeather = async () => {
        let citiesList = Object.keys(this.state.citiesList).join(`,`);
        if (citiesList.length) {
            try {
                const get_api = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${citiesList}&units=metric&appid=${API_KEY}`);
                const data = await get_api.json();

                console.log('what we get, global', data);

                if (!get_api.ok) {
                    throw data.message;
                }

                this.setState({
                    weatherList: data.list
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
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.citiesList = JSON.stringify(this.state.citiesList);
    }

    weatherShortRemove = (event, element) => {
        event.stopPropagation();
        let newList = this.state.citiesList;
        delete newList[element];
        this.setState({
            citiesList: newList
        })
    };

    render() {
        return (
            <>
                <Form addCity={this.addCity} apiKey={API_KEY}/>
                {Object.keys(this.state.citiesList).map((element, index) =>
                    <WeatherWrapper
                        key={element}
                        city={this.state.citiesList[element]}
                        weather={this.state.weatherList[index] || false}
                        clickHandlerRemove={(event) => this.weatherShortRemove(event, element)}
                    />)
                }
            </>
        )
    }
}

export default WeatherGlobal;


