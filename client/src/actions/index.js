import axios from 'axios';
import { browserHistory } from 'react-router';
import types from './types';

const API_KEY = '81849dcf60c72d2a38d3a1ed3551ec98';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const ROOT_URL = 'http://localhost:3090';
//in this func, submit email/password to the server
//if request is good, update the state to indicate the user is authenticated
//save the hwt token
//redirect the toute to '/feature
//if the request is bad, show an error
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email:email, password:password})
    .then(response => {
      dispatch({ type: types.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch(()=>{
      dispatch(authError('Bad Login Info'));
    });
  };
}

export function authError(error){
  return {
    type: types.AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
    console.log('signing out...');
    localStorage.removeItem('token');
    return { type: types.UNAUTH_USER };
}

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email: email, password: password})
      .then(response => {
        dispatch({ type:types.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(error=>{
        // console.log(error.response);
        dispatch(authError(error.response.data.error));
      })
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {headers: { authorization: localStorage.getItem('token') }})
      .then(response=>{
        dispatch({
          type: types.FETCH_MESSAGE,
          payload: response.data
        });
      });
  }
}

export function fetchWeather(cityName) {
  const url = `${API_URL}&q=${cityName},us`;
  return function(dispatch) {
    axios.get(url).then(response => {
      console.log(response.data);
      dispatch({
        type: types.FETCH_WEATHER,
        payload: response.data
      });
    });
  };
}