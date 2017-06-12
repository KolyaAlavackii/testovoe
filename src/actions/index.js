import {v4 as generateId} from 'node-uuid';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_DEFAULT_WEATHER = 'FETCH_DEFAULT_WEATHER';

export const DELETE_LOCATION = 'DELET_LOCATION';
export const ADD_LOCATION = 'ADD_LOCATION';
export const GET_ACTIVE_LOCATION = 'GET_ACTIVE_LOCATION';

export const TOGGLE_MENU = 'TOGGLE_MENU';


export const fetchDefaultWeather = () => ({
    type: FETCH_DEFAULT_WEATHER
});

export const fetchWeather = city => ({
    type: FETCH_WEATHER,
    city
});

export const addLocation = data => ({
    type: ADD_LOCATION,
    weather: {
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        id: generateId(),
        isFething: false
    }
});

export const deleteLocation = id => ({
    type: DELETE_LOCATION,
    id
});

export const toggleMenu = () => ({
    type: TOGGLE_MENU 
});

export const getActiveLocation = id => ({
    type: GET_ACTIVE_LOCATION,
    id
});