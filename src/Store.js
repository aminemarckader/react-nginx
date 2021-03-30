import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { composeWithDevTools } from "redux-devtools-extension";
import hardwareReducer from './Reducers/hardwareReducer';
import departmentsReducer from './Reducers/departmentsReducer';

const reducers = combineReducers({
    hardware: hardwareReducer,
    departments: departmentsReducer
});

const middleware = [thunk];

let initialState = [];

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
