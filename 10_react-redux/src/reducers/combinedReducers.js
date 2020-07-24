import { combineReducers } from 'redux';

import nameReducer from './nameReducer';
import todoReducer from './todoReducer';

const combinedReducers = combineReducers({
    name: nameReducer,
    todo: todoReducer
});

export default combinedReducers;
