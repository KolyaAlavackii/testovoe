import { combineReducers } from 'redux';

import { default as locations } from './locations';
import { default as toggle }  from './toggle';
import { default as activeLocation }  from './activeLocation';

const reducer = combineReducers({
    locations,
    activeLocation,
    toggle
});

export default reducer;