// BARE BONES VERSION -- ONE REDUCER

/*

import { createStore } from "redux"

const reducer = function(state, action) {
    if (action.type === "INC")
        return state + action.payload;
    if (action.type === "DEC")
        return state - action.payload;
    return state
}

const store = createStore(reducer, 0);  // 0 is initial state

store.subscribe( () => {
    console.log("store changed", store.getState());
});

store.dispatch( {type: "INC", payload: 123} );
store.dispatch( {type: "INC", payload: 234} );
store.dispatch( {type: "DEC", payload:  12} );

*/

///////////////////////////////////////////////////////////////////////////

// TWO REDUCERS

import { createStore, combineReducers } from "redux"

const INITIAL = {
    name: "Bob",
    pets: []
}

// initial state now defined in function signature
const nameReducer = function(state=INITIAL.name, action) {
    if (action.type === "CHANGE_NAME")
        return state = action.payload;
    return state;
}

const petReducer = function(state=INITIAL.pets, action) {
    if (action.type === "ADD_PET")
        return [...state, action.payload]  // creates new list
    return state;
}

const reducers = combineReducers({
    name: nameReducer,
    pets: petReducer
});

const store = createStore(reducers);

store.subscribe( () => {
    console.log("store changed", store.getState());
});

store.dispatch( {type: "CHANGE_NAME", payload: "John"} );
store.dispatch( {type: "ADD_PET", payload: "Samuel the Cat"} );
store.dispatch( {type: "ADD_PET", payload: "Frosty the Snowman"} );
store.dispatch( {type: "CHANGE_NAME", payload: "Ben"} );
store.dispatch( {type: "ADD_PET", payload: "Casper the Ghost"} );
