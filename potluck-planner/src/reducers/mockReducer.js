import { mockState } from '../mock-data.js';

export const mockReducer = (state = mockState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}