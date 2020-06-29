import React, { Component } from "react";
import WeatherGlobal from "./components/WeatherGlobal/WeatherGlobal";
import "./App.css";

class App extends Component {
    // state = {
    //     citiesList: JSON.parse(localStorage.citiesList),
    // };
    //
    // addCity = (event) => {
    //     event.preventDefault();
    //     const city = event.target.elements.city.value;
    //     const country = event.target.elements.country.value;
    //
    //     //To be solved
    //     // const id = this.state.id;
    //
    //     event.target.elements.city.value = ''; //??
    //     event.target.elements.country.value = ''; //??
    //     const newCitiesList = this.state.citiesList;
    //
    //     newCitiesList.push({name: city, countryCode: country}); // need unique id
    //     this.setState({
    //         citiesList: newCitiesList
    //     });
    //     console.log(this.state.citiesList);
    // };
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     localStorage.citiesList = JSON.stringify(this.state.citiesList)
    // }
    //
    // weatherShortRemove = (event, index) => {
    //     event.stopPropagation();
    //     let newList = this.state.citiesList;
    //     newList.splice(index, 1);
    //     this.setState({
    //         citiesList: newList
    //     })
    // };

    render() {
        return (
            // <div className="App">
            //     <h1>Hello, I'm weather app</h1>
            //     <Form addCity={this.addCity}/>
            //     {this.state.citiesList.map((element, index) =>
            //         <WeatherWrapper
            //             key={index}
            //             city={element}
            //             clickHandlerRemove={(event) => this.weatherShortRemove(event, index)}
            //         />)
            //     }
            // </div>
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <WeatherGlobal/>
            </div>

        )
    }
}

export default App;


