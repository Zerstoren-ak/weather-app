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
                <input type="text" name="city" placeholder="City..." value={city}/>
                <input type="text" name="country" placeholder="Country code..." value={country}/>
                <button type="submit" onClick={()=>{getWeather(city, country); clearInputs()}}>Get Weather</button>
            </form>
        )
}

export default Form