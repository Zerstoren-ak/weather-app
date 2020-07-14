import React, { Component } from "react";
import WeatherGlobal from "./components/WeatherGlobal/WeatherGlobal";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <WeatherGlobal/>
            </div>
        )
    }
}

export default App;


