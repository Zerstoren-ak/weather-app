import React, { Component } from "react";
import WeatherGlobal from "./components/WeatherGlobal/WeatherGlobal";
import FormRegistration from "./components/FormRegistration/FormRegistration";
import FormSignIn from "./components/FormSignIn/FormSignIn";
import "./App.css";

class App extends Component {

    state = {
        toShow: [1,2,3]
    };

    setToShow() {
        let arr = [...this.state.toShow];
        arr.pop();
        this.setState({
            toShow: arr
        });
        if (arr.length === 0) {
            arr.push(1,2,3)
        }
    }

    render() {

        let show = null;

        if (this.state.toShow.length === 3) {
            show = <WeatherGlobal/>
        } else if (this.state.toShow.length === 2) {
            show = <FormRegistration/>
        } else if (this.state.toShow.length === 1) {
            show = <FormSignIn/>
        }

        return (
            <div className="App">
                <h1>Hello, I'm weather app</h1>
                <button
                    style={{backgroundColor: "red", fontWeight: "bold", fontSize: "3rem", borderRadius: "999px"}}
                    onClick={() => this.setToShow()}
                >
                    CLICK!
                </button>
                {show}
            </div>
        )
    }
}

export default App;


