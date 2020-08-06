import { combineReducers } from 'redux';
import history from './historyReducer';
import payloadData from './payloadReducer';  

export default combineReducers({
    historyData : history,
    payloadData : payloadData
})