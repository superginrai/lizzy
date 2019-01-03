import { combineReducers } from 'redux';

const setLocation = (state = {lat: '', lng: ''}, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return [...state.lat, ...action.payload.lat];
        default:
            return state;
    }
};

const setLng = (state = [], action) => {
    switch (action.type) {
        case 'SET_LNG':
            return [...state, ...action.payload.lng];
        default:
            return state;
    }
};

export default combineReducers({
    setLocation,
    setLng,
});