import api from '../api';
import { FETCH_HISTORY_START, FETCH_HISTORY_SUCCESS, FETCH_HISTORY_FAIL } from '../actions';

export function fetchHistory(){
    return function(dispatch,getState){
        dispatch({type : FETCH_HISTORY_START, payload : {errinfo:null,loading:true,data:[]}})
        return api.historyapi().then(data=>{
            dispatch({type: FETCH_HISTORY_SUCCESS, payload : {errinfo:null,loading:false, data:data}})
            return data;
        }).catch(err=>{
            dispatch({type: FETCH_HISTORY_FAIL, payload : {errinfo:err.message,loading:false, data:[]}})
            return err;
        });
    }
}

export function fetchSingleHistory(id){
    return function(){
        return api.historyApiById(id)
    }
}