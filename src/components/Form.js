import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: '1rem'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Form(props) {
  const {getWeather} = props;

  const classes = useStyles();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const clearInputs = ( ) => {
    setCity("");
    setCountry("")
  }

  return (
    <>
      <TextField
        required
        id="filled-required"
        label="City..."
        value={city}
        className={classes.textField}
        onChange={(event) => {
          setCity(event.currentTarget.value)
        }}
        variant="filled"
      />
      <TextField
        required={true}
        id="filled-required"
        label="Country code..."
        variant="filled"
        value={country}
        className={classes.textField}
        onChange={(event) => {
          setCountry(event.currentTarget.value)
        }}
      />
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={() => {
          getWeather(city, country);
          clearInputs();
        }}
        startIcon={<CloudUploadIcon />}
      >
        Get Weather
      </Button>
    </>
  )
}

export default Form
