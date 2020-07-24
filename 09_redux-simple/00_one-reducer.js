import { createStore } from "redux";

const reducer = function(state, action) {
    if (action.type === "INC")
        return state + action.payload;
    if (action.type === "DEC")
        return state - action.payload;
    return state;
}

const store = createStore(reducer, 0);  // 0 is initial state

store.subscribe( () => {
    console.log("store changed", store.getState());
});

store.dispatch( {type: "INC", payload: 123} );
store.dispatch( {type: "INC", payload: 234} );
store.dispatch( {type: "DEC", payload:  12} );
