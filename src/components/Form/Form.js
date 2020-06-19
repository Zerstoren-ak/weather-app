import React, {useState} from "react";

function Form(props) {

    const {getWeather} = props;

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const clearInputs = ( ) => {
        setCity("");
        setCountry("")
    }

        return(
            <form onSubmit={props.addCity}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country code..."/>
                <button type="submit" onClick={clearInputs}>Get Weather</button>
            </form>
        )
}

export default Form