import { HAVE_USERS, HAVE_EVENTS } from '../actions';

const initialState = {
    users: {},
    events: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HAVE_USERS:
            return {
                ...state,
                users: action.payload
            }
        case HAVE_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state
    }
}