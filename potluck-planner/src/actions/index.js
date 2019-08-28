import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Login from '../components/Login';

export const LOGIN = 'LOGIN';

export const GET_DATA = 'GET_DATA';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

export const login = obj => dispatch => {
    console.log("obj in login(): ", obj);

    axios
        .post('https://potluckplanner-be.herokuapp.com/users/login', {...obj})
        .then(res => dispatch({ type: Login, payload: res.data.token}))
        .catch(err => console.error(err.response));
}