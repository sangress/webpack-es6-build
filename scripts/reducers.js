/**
 * Created by sangress on 01/06/2017.
 */

const initialState = {};

export const sampleReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'GET_USER_FULFILLED':
            return Object.assign(payload);
            
        default:
            return state;
    }
}


