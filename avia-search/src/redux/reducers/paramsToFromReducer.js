const inititalState = {
    from: null,
    to: null
};


const paramsToFromReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "CHANGEPLACEFROM": {
            return { ...state, from: action.payload };
        }
        case "CHANGEPLACETO": {
            return { ...state, to: action.payload };
        }
    }
    return state;
};


export default paramsToFromReducer;