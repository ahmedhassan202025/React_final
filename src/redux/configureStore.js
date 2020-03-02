import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Comments } from './comments';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            comments:Comments,
            promotions:Promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}