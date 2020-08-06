import api from '../api';
import { FETCH_PAYLOAD_START,FETCH_PAYLOAD_SUCCESS,FETCH_PAYLOAD_FAIL } from './';
export function payloadFetch(){
    return function(dispatch){
        dispatch({type : FETCH_PAYLOAD_START, payload : {errinfo:null,loading:true,data:[]}})
        return api.payloadApi().then(data=>{
            dispatch({type: FETCH_PAYLOAD_SUCCESS, payload : {errinfo:null,loading:false, data:data}})
            return data;
        }).catch(err=>{
            dispatch({type: FETCH_PAYLOAD_FAIL, payload : {errinfo:err.message,loading:false, data:[]}})
            return err;
        });
    }
}
export function fetchSinglePayload(id){
    return function(){
        return api.payloadApiById(id)
    }
}