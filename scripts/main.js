/**
 * Created by sangress on 01/06/2017.
 */

import {createStore, applyMiddleware} from 'redux';
import {sampleReducer} from './reducers';
import {epicMiddleware} from './epics';

let store = createStore(sampleReducer, applyMiddleware(epicMiddleware));
let resBox = document.querySelector('#result');

store.subscribe(() => {
    console.log('subscribe', store.getState());
    resBox.innerHTML = JSON.stringify(store.getState());
});

let getUser = (id) => {
    store.dispatch({type: 'GET_USER', payload: 1});
}

window.addOne = addOne;
console.log('state', store.getState());
