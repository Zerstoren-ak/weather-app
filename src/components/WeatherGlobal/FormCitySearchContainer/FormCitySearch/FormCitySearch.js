import React from "react";
import './FormCitySearch.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function FormCitySearch({handleForm}) {
    return (
        <form className={"search-form"} onSubmit={handleForm}>
            <TextField
                className={"data-input"}
                required type={"text"}
                name={"city"}
                id="outlined-basic"
                label="City..."
                variant="outlined"
            />
            <TextField
                className={"data-input"}
                type={"text"} name={"country"}
                id="outlined-basic"
                label="Country code..."
                variant="outlined"
            />
            <Button
                className={"data-submit"}
                type={onsubmit}
                variant="outlined"
                size="medium"
                color="primary"
            >
                Get Weather
            </Button>
        </form>
    )
}

export default FormCitySearch;