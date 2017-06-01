/**
 * Created by sangress on 01/06/2017.
 */

const initialState = [];

export const sampleReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'ADD_ONE':
            return [payload, ...state];
            
        default:
            return state;
    }
}


