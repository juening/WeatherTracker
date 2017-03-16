import axios from 'axios';
import { browserHistory } from 'react-router';
import types from './types';


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