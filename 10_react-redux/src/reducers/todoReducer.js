const INITIAL = []

const todoReducer = function(state=INITIAL, action) {
    if (action.type === "ADD_TODO")
        return [...state, action.payload];
    return state;
}

export default todoReducer;
