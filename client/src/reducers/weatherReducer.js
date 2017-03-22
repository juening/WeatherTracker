import types from '../actions/types';

export default function (state={weatherList:[], city:'', current: null }, action) {
    switch (action.type) {
        case types.FETCH_WEATHER:
            return { ...state, city: action.payload.city, weatherList:action.payload.list };

        case types.FETCH_CURRENT:
        
            return {...state, city: action.payload.name, current: action.payload };
        
        default:
            return state;
    }
}

