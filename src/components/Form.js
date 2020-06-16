import React, { Component } from "react";

class Form extends Component {
    render() {
        return(
            <form onSubmit={this.props.addCity}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country code..."/>
                <button type="submit">Get Weather</button>
            </form>
        )
    }
}

export default Form