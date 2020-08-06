import { FETCH_PAYLOAD_START, FETCH_PAYLOAD_SUCCESS, FETCH_PAYLOAD_FAIL } from '../actions';

const initialState = {
    data : [],
    loading : false,
    errinfo : null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_PAYLOAD_START :
            return {
                ...state,
                loading : action.payload.loading
            };
        case FETCH_PAYLOAD_SUCCESS : 
        return{
            ...state,
            loading : action.payload.loading,
            data : action.payload.data
        }    
        case FETCH_PAYLOAD_FAIL : 
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