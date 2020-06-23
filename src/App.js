import React, { Component } from "react";
import "./App.css";

import WeatherShort from "./components/windowSmall/Weather-Short";
import Form from "./components/Form"

if (!localStorage['citiesList']) {
    localStorage['citiesList'] = JSON.stringify([])
}

class App extends Component {
    state = {
        citiesList: JSON.parse(localStorage['citiesList']),
        expand: false,//flag
        expandInfo: {}
    };

    componentDidUpdate(nextProps, nextState, nextContext) {
        localStorage['citiesList'] = JSON.stringify(this.state.citiesList);
    }

    addCity = (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        event.target.elements.city.value = '';
        event.target.elements.country.value = '';
        const cl = this.state.citiesList;
        cl.push({ name: city, cc: country });
        this.setState({
            citiesList: cl
        });
    }
    openWeatherExpanded = (message,city) => {
        console.log(message, city);
        this.setState({
            expandInfo: city
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <Form addCity={this.addCity} />
                <div >
                    {this.state.citiesList.map((city, index) =>
                        <WeatherShort key={index} city={city} onCityChange={(dataFromComponent) => this.openWeatherExpanded('hello',dataFromComponent )} />
                    )}
                </div>
            </div>
        )
    }
}

export default App;


