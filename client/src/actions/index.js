import axios from 'axios';
import { browserHistory } from 'react-router';
import types from './types';
import { API_KEY } from '../../config';

let CNT = 7;
let UNIT = 'imperial';
const DAILY_FORECAST_API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&units=${UNIT}&cnt=${CNT}`;
//const ZIP_API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&units=${UNIT}&cnt=${CNT}`;
const CURRENT_API_URL =  `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=${UNIT}&cnt=${CNT}`;

const ROOT_URL = 'http://localhost:3090';
//in this func, submit email/password to the server
//if request is good, update the state to indicate the user is authenticated
//save the hwt token
//redirect the toute to '/feature
//if the request is bad, show an error
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/signin`, {email:email, password:password})
    .then(response => {
      console.log(response.data.cities);
      dispatch({ type: types.AUTH_USER, payload: response.data.cities });
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
    axios.post(`${ROOT_URL}/api/signup`, { email: email, password: password})
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

// export function fetchMessage() {
//   return function(dispatch) {
//     axios.get(`${ROOT_URL}/api`, {headers: { authorization: localStorage.getItem('token') }})
//       .then(response=>{
//         dispatch({
//           type: types.FETCH_MESSAGE,
//           payload: response.data
//         });
//       });
//   }
// }

export function fetchWeather(p1, p2) {
  const urlAddon = urlTransform(p1, p2);
  const url = `${DAILY_FORECAST_API_URL}${urlAddon}`;
  return function(dispatch) {
    axios.get(url).then(response => {
    //  console.log(response.data);
      dispatch({
        type: types.FETCH_WEATHER,
        payload: response.data
      });
    });
  };
}

function urlTransform(p1, p2) {
  let urlAddon='';
  if(p2) {
    urlAddon += `&lon=${p1}&lat=${p2}`;
  } else if(isNaN(p1)) {
    urlAddon += `&q=${p1},us`;
  } else {
    urlAddon += `&zip=${p1},us`;
  }
  return urlAddon;
}

export function fetchCurrent(p1, p2) {
  const urlAddon = urlTransform(p1, p2);
  const url = `${CURRENT_API_URL}${urlAddon}`;

  return function(dispatch) {
    axios.get(url).then(response=>{
    //  console.log(response.data);
      dispatch({
        type: types.FETCH_CURRENT,
        payload: response.data
      });
    });
  };
}
