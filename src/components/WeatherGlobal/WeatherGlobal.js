import React, {useState, useCallback, useEffect} from "react";
import FormCitySearch from "./FormCitySearch/FormCitySearch"
import WeatherWrapper from "./WeatherWrapper/WeatherWrapper";
import {toast} from "react-toastify";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './WeatherGlobal.css'

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

    function addCity(data) {
        console.log('addCity props data received:', data);
        if (!citiesList.find(element => element.id === data[0].id)) {
            setCitiesList(list => [...list, data[0]]);
            setWeatherList(list => [...list, data[1]]);
        }
    }

    const getWeather = useCallback(async () => {
        let idList = citiesList.map(element => element.id).join(`,`);
        // console.log('id list:', idList);
        if (citiesList.length) {
            try {
                const get_api = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${idList}&units=metric&appid=${API_KEY}`);
                const data = await get_api.json();
                console.log('WHAT WE GET, WeatherGlobal', data);

                //from API- we get data for multiple cities by city ID
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
        // console.log('useEffect getWeather')
    }, [getWeather]);

    useEffect(() => {
        localStorage.citiesList = JSON.stringify(citiesList);
        // console.log('useEffect localStorage')
    });

    function weatherShortRemove(event, index) {
        // event.stopPropagation();
        let newList = [...citiesList];
        newList.splice(index, 1);
        setCitiesList(newList);
    }

    function onDragEnd(result) {
        const {destination, source, draggableId} = result;
        // console.log('result', result);
        // console.log('destination', destination);
        // console.log('source', source);
        // console.log('source-index', source.index);

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newOrder = [...citiesList];
        const draggedItem = newOrder.filter((e) => e.id === +draggableId);
        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, ...draggedItem);
        setCitiesList(newOrder);
    }

    return (
        <>
            <FormCitySearch addCity={addCity} apiKey={API_KEY}/>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={'main-order'}>
                    {provided => (
                        <div
                            className={'WeatherGlobal'}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <TransitionGroup>
                                {citiesList.map((element, index) =>
                                    <CSSTransition
                                        key={citiesList[index].id}
                                        timeout={500}
                                        classNames="transition-item-global"
                                    >
                                        <WeatherWrapper
                                            index={index}
                                            city={citiesList[index]}
                                            weather={weatherList[index] || false}
                                            clickHandlerRemove={(event) => weatherShortRemove(event, index)}
                                        />
                                    </CSSTransition>)
                                }
                                {provided.placeholder}
                            </TransitionGroup>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default WeatherGlobal;