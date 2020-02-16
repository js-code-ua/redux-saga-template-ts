/* eslint-disable @typescript-eslint/no-namespace */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { UserReducer } from './user';
import { IRootReducer } from './state';

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<IRootReducer>({
    router: routerReducer,
    user: UserReducer as any
});

export default rootReducer;