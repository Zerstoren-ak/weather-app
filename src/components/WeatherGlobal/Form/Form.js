import React from "react";
import {toast} from "react-toastify";

function Form(props) {
    async function handleForm(event) {
        event.preventDefault();
        try {
            const city = event.target.city.value;
            const country = event.target.country.value;
            const get_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country ? country : ''}&appid=${props.apiKey}&units=metric`);
            const data = await get_api.json();
            // console.log(data);

            if (data.cod >= 400 && data.cod <= 499) {
                throw data.message;
            }

            const cityData = {};
            cityData.id = data.id;
            cityData.name = data.name;
            cityData.country = data.sys.country;
            const weather = data;

            console.log([cityData, weather]);

            props.addCity([cityData, weather])

        } catch (error) {
            console.log(error);
            toast.error(error,
                {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            )
        }
    }

    return (
        <form onSubmit={handleForm} >
            <input type="text" name="city" placeholder="City..." required/>
            <input type="text" name="country" placeholder="Country code..."/>
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default Form