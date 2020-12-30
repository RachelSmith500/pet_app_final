import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addTodo(action){
    console.log('hello from addTodo', action.payload);
    try{
        yield axios.post(`/api/dailyPetTodo`, action.payload)
        yield put({type: 'FETCH_DAILY_PET_TODO'})
    } catch (error){
        console.log('error in post', error);
    }
}

function* newTodoSaga(){
    yield takeLatest('ADD_TASKS', addTodo);
}

export default newTodoSaga;