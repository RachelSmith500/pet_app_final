import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteTodo(action){
    try{
        console.log('hello from delete daily todo', action.payload);
        yield axios.delete(`/api/dailyPetTodo/${action.payload.id}`)

    yield put({type:'FETCH_DAILY_PET_TODO'});
    }catch (error){
        console.log('error in post', error)
    }
}

function* deleteTodoSaga(){
    yield takeLatest('DELETE_DAILY_PET_TODO', deleteTodo);
}

export default deleteTodoSaga;