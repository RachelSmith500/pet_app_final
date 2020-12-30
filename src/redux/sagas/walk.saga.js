import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getWalk(){
    console.log('hi from walk')
    try{
    const walk = yield axios.get('/api/walk')
    console.log('walk', walk.data);
    yield put({type: 'SET_WALK', payload: walk.data});
    } catch (error) {
        console.log('error in get')
    }
}

function* walkSaga(){
    yield takeLatest('FETCH_WALK', getWalk);
}
export default walkSaga;