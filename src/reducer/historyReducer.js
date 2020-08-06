import { FETCH_HISTORY_START, FETCH_HISTORY_SUCCESS, FETCH_HISTORY_FAIL } from '../actions';

const initialState = {
    data : [],
    loading : false,
    errinfo : null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_HISTORY_START :
            return {
                ...state,
                loading : action.payload.loading
            };
        case FETCH_HISTORY_SUCCESS : 
        return{
            ...state,
            loading : action.payload.loading,
            data : action.payload.data
        }    
        case FETCH_HISTORY_FAIL : 
        return{
            ...state,
            loading : action.payload.loading,
            data : action.payload.data,
            errinfo : action.payload.errinfo
        }
        default : 
        return state;
    }
}