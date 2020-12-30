import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDailyPetTodo(){
    console.log('hi from dailyPetTodo')
    try{
    const dailyPetTodo = yield axios.get('/api/dailyPetTodo')
    console.log('dailyPetTodo', dailyPetTodo.data);
    yield put({type: 'SET_DAILY_PET_TODO', payload: dailyPetTodo.data});
    } catch (error) {
        console.log('error in get')
    }
}

function* updateCompleteStatus(action){
    console.log('hi from updateCompleteStatus', action.payload.status)
    try{
        yield axios.put(`/api/dailyPetTodo/${action.payload.id}/${action.payload.status}`);
        console.log('updateCompleteStatus try')
    } catch(error){
        console.log('error in PUT')
    }
    yield put({type: 'FETCH_DAILY_PET_TODO'})
}
function* todoListSaga() {
    yield takeLatest('FETCH_DAILY_PET_TODO', getDailyPetTodo);
    yield takeLatest('UPDATE_COMPLETE_STATUS', updateCompleteStatus);

}


export default todoListSaga;