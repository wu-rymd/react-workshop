import { createStore } from "redux";

const reducer = function(currState, action) {
    if (action.type === "INC")
        return currState + action.payload;
    if (action.type === "DEC")
        return currState - action.payload;
    return currState
}

const store = createStore(reducer, 0);  // 0 is initial state

store.subscribe( () => {
    console.log("store changed", store.getState());
});

store.dispatch( {type: "INC", payload: 123} );
store.dispatch( {type: "INC", payload: 234} );
store.dispatch( {type: "DEC", payload:  12} );
