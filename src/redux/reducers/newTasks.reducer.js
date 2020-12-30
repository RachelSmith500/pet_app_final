const newTask = (state =[], action) => {
    switch (action.type) {
        case 'SET_TASKS' :
            return [ ...state, action.payload]
        default:
            return state;    
    }
};