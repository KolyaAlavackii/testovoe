import {
    FETCH_WEATHER,
    ADD_LOCATION,
    FETCH_DEFAULT_WEATHER,
    addLocation,
    GET_ACTIVE_LOCATION
} from '../actions';

const fetchWeather = (store, city) => {
    const baseUrl = `http://api.openweathermap.org`;
    const path = `/data/2.5/weather`;
    const appId = '8150f6fe7a37ebd749de66ec803d8b56';
    const query = `units=metric&appid=${appId}`;

    fetch(`${baseUrl}${path}?q=${city}&${query}`)
        .then(response => response.json())
        .then(data => store.dispatch(addLocation(data)))
        .catch(error => console.log(error));
}

const middleware = store => next => action => {
    switch (action.type) {
        case FETCH_DEFAULT_WEATHER:
            fetch('//freegeoip.net/json/')
                .then(response => response.json())
                .then(({ city }) => fetchWeather(store, city))
                .catch(error => console.log(error));
            break;

        case FETCH_WEATHER:
            fetchWeather(store, action.city);
            break;

        case GET_ACTIVE_LOCATION:
            const locations = store.getState().locations;
            const id = action.id;
            const index = locations.findIndex(location => location.id === id);
            const activeLocation = locations[index];
            return next({ ...action, activeLocation });

        default: return next({ ...action });
    }
}

export default middleware;