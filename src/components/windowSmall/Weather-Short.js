import React, { Component } from "react";
import "./Weather-Short.css"


class WeatherShort extends Component {
    render() {
        return (
            <div className={'weather-block'}>
                <div>
                    { this.props.city ? <h2>{this.props.city}</h2> : <h2>City</h2> }
                    { this.props.country ? <p>{this.props.country}</p> : <p>Country</p> }
                </div>
                { this.props.temperature ? <h3>{Math.round(this.props.temperature) + '\u00B0C'}</h3> : "" }
            </div>
        )
    }
}

export default WeatherShort