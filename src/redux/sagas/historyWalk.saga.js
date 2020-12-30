import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addWalk(action){
    console.log('hello from add walk', action.payload);
    try{
        yield axios.post(`/api/walk`, action.payload)
        yield put({type: 'FETCH_WALK'})
    } catch (error){
        console.log('error in post', error);
    }
}

function* historyWalkSaga(){
    yield takeLatest('ADD_WALK', addWalk);
}

export default historyWalkSaga;