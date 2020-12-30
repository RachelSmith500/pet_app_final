const dailyPetTodo = (state = [], action) => {
    switch (action.type) {
        case 'SET_DAILY_PET_TODO':
            return (action.payload)
        default:
            return state; 
    }
}

export default dailyPetTodo;