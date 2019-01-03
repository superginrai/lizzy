import { combineReducers } from 'redux';

const setLocation = (state = [], action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return [...state, ...action.payload];
        default:
            return state;
    }
};

const setLng = (state = [], action) => {
    switch (action.type) {
        case 'SET_LNG':
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default combineReducers({
    setLocation,
    setLng,
});