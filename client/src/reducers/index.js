import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  weather: weatherReducer
});

export default rootReducer;
