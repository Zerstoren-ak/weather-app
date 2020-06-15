import React, { Component } from "react";
import "./Weather-Short.css"


class WeatherShort extends Component {
    render() {
        return (
            <div className={'weather-block'}>
                <div>
                    <h2>City</h2>
                    <p>Country</p>
                </div>
                <h3>Temperature</h3>
            </div>
        )
    }
}

export default WeatherShort