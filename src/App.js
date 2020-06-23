import React, { Component } from "react";
import Form from "./Form/Form"
import WeatherWrapper from "./components/WeatherWrapper/WeatherWrapper";
import "./App.css";

if (!localStorage.citiesList) {
    localStorage.citiesList = JSON.stringify([])
}

class App extends Component {
    state = {
        citiesList: JSON.parse(localStorage.citiesList),
    };

    addCity = (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;

        //To be solved
        // const id = this.state.id;

        event.target.elements.city.value = ''; //??
        event.target.elements.country.value = ''; //??
        const newCitiesList = this.state.citiesList;

        newCitiesList.push({name: city, countryCode: country}); // need unique id
        this.setState({
            citiesList: newCitiesList
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.citiesList = JSON.stringify(this.state.citiesList)
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <Form addCity={this.addCity}/>
                {this.state.citiesList.map((element, index) =>
                    <WeatherWrapper
                        key={index}
                        city={element}
                    />)
                }
            </div>
        )
    }
}

export default App;


