import { createStore, applyMiddleware } from 'redux';

import combinedReducers from './reducers/combinedReducers';

const logger = store => next => action => {
    console.log("action fired", action);
    // can modify action here...
    next(action);
};

const middleware = applyMiddleware(logger);

const store = createStore(combinedReducers, middleware);

store.dispatch( {type: "CHANGE_NAME", payload: "John Doe"} );

export default store;
