import { axiosWithAuth } from '../utils/axiosWithAuth';

export const HAVE_USERS = 'HAVE_USERS';
export const HAVE_EVENTS = 'HAVE_EVENTS';


export const getUsers = _ => dispatch => {

    axiosWithAuth()
        .get('https://potluckplanner-be.herokuapp.com/users')
        .then(res => dispatch({ type: HAVE_USERS, payload: res.data }))
        .catch(err => console.error(err))

}

export const getEvents = _ => dispatch => {

    axiosWithAuth()
        .get('https://potluckplanner-be.herokuapp.com/events')
        .then(res => dispatch({ type: HAVE_EVENTS, payload: res.data }))
        .catch(err => console.error(err))

}