const INITIAL = "Bob"

const nameReducer = function(state=INITIAL, action) {
    if (action.type === "CHANGE_NAME")
        return state = action.payload;
    return state;
}

export default nameReducer;
