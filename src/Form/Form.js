import React from "react";

function Form(props) {
    return (
        <form onSubmit={props.addCity}>
            <input type="text" name="city" placeholder="City..." required/>
            <input type="text" name="country" placeholder="Country code..."/>
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default Form