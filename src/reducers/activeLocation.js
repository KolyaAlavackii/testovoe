import { GET_ACTIVE_LOCATION } from '../actions';

const initialState = {
    city: '',
    country: '',
    temp: 0,
    humidity: 0,
    description: '',
    icon: '',
    isFething: true
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_ACTIVE_LOCATION:
            return Object.assign({}, state, action.activeLocation);

        default: return state;
    }
}

export default reducer;