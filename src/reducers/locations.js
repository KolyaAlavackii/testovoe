import { ADD_LOCATION, DELETE_LOCATION } from '../actions';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_LOCATION:
            return [action.weather, ...state];

        case DELETE_LOCATION:
            const index = state.findIndex(location => location.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        default: return state;
    }
}

export default reducer;