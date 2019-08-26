import { mockState } from '../mock-data';

export const mockReducer = (state = mockState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}