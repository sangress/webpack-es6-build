/**
 * Created by sangress on 01/06/2017.
 */

import { createEpicMiddleware } from 'redux-observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ajax } from 'rxjs/observable/dom/ajax';

const fetchUsers = action$ =>
    action$.ofType('GET_USER')
        .mergeMap(action =>
            ajax.getJSON(`https://api.github.com/users/${action.payload}`)
                .map(response => ({type: 'GET_USER_FULFILLED', payload: response}))
        );



export const epicMiddleware = createEpicMiddleware(fetchUsers);
