const newWalk = (state =[], action) => {
    switch (action.type) {
        case 'SET_WALK' :
            return action.payload
        default:
            return state;    
    }
};

export default newWalk;