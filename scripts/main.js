/**
 * Created by sangress on 01/06/2017.
 */

import {createStore} from 'redux';
import {sampleReducer} from './reducers';

let store = createStore(sampleReducer);

let addOne = () => {
    store.dispatch({type: 'ADD_ONE', payload: 1});
    console.log('state', store.getState());
}

window.addOne = addOne;
console.log('state', store.getState());
