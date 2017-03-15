
import axios from 'axios';

import * as types from './constants';


const ROOT_URL = 'http://localhost:3090';
//in this func, submit email/password to the server
//if request is good, update the state to indicate the user is authenticated
//save the hwt token
//redirect the toute to '/feature
//if the request is bad, show an error
export function signinUser({ email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email:email, password:password });
    }
}