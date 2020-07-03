import React, {useState, useCallback, useEffect} from "react";
import Form from "./Form/Form"
import WeatherWrapper from "./WeatherWrapper/WeatherWrapper";
import {toast} from "react-toastify";

if (!localStorage.citiesList) {
    localStorage.citiesList = JSON.stringify([])
}


// Clock - подвязаться к веремени UTC с корректировкой timezone от API - локальное время выбранного города
// *timezone - пофиксить sunrise/sunset в часовых поясах 'UTC-'
// Сделать список draggable list
// Пару комнонентов для роутинга, регистрация...

const API_KEY = `30c1cbeda422363611d8892955df2a7a`;

function WeatherGlobal(props) {
    const [citiesList, setCitiesList] = useState(JSON.parse(localStorage.citiesList));
    const [weatherList, setWeatherList] = useState([]);
    // state = {
    //     citiesList: JSON.parse(localStorage.citiesList),
    //     weatherList: []
    // };

    // function getCitiesId() {
    //     let newSet = new Set();
    //     for (let i = 0; i < citiesList.length; ++i) {
    //         newSet.add(citiesList[i].id)
    //     }
    //     return newSet;
    // }

    function addCity(data) {
        console.log('addCity props data received:', data);
        // let savedCities = [...citiesList];
        if (!citiesList.find(e => e.id === data[0].id)) {
            // savedCities.push(data[0]);
            // let newWeatherList = [...weatherList];
            // newWeatherList.push(data[1]);
            // setCitiesList(savedCities);
            setCitiesList(list => [...list, data[0]]);
            // setWeatherList(newWeatherList);
            setWeatherList(list => [...list, data[1]]);
            // console.log('global citiesList:', savedCities);
            // console.log('global weatherList:', newWeatherList)
        }
        // this.setState({
        //     citiesList: savedCities,
        //     weatherList: newWeatherList
        // });
    }
    // componentDidMount() {
    //     this.getWeather()
    // }
    const getWeather = useCallback(async () => {
        let idList = citiesList.map(e => e.id).join(`,`);
        console.log('id list:', idList);
        if (citiesList.length) {
            try {
                const get_api = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${idList}&units=metric&appid=${API_KEY}`);
                const data = await get_api.json();
                console.log('WHAT WE GET, WeatherGlobal', data);

                if (!get_api.ok) {
                    throw data.message;
                }

                setWeatherList(data.list)
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
    }, [citiesList]);

    useEffect(() => {
        getWeather();
        console.log('useEffect getWeather')
    }, [getWeather]);

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     localStorage.citiesList = JSON.stringify(this.state.citiesList);
    // }

    useEffect(() => {
        localStorage.citiesList = JSON.stringify(citiesList);
        console.log('useEffect localStorage')
    });

    function weatherShortRemove(event, index) {
        event.stopPropagation();
        let newList = [...citiesList];
        newList.splice(index, 1);
        setCitiesList(newList);
    }

    return (
        <>
            <Form addCity={addCity} apiKey={API_KEY}/>
            {citiesList.map((element, index) =>
                <WeatherWrapper
                    key={index}
                    city={citiesList[index]}
                    weather={weatherList[index] || false}
                    clickHandlerRemove={(event) => weatherShortRemove(event, index)}
                />)
            }
        </>
    )
}

export default WeatherGlobal;