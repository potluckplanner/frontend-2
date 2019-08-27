import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_DATA = 'GET_DATA';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

export const getData = fields = dispatch => {
    dispatch({ type: FETCHING });
    axiosWithAuth()
        .get('https://api.some.api/routes/here')
        .then(res => dispatch({  }))
}