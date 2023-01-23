import{ _alert} from '../actions/alert-action';
import  initialState  from '../store/initialState';

export const reducer=(state = initialState.alert, action)=>{
    switch(action.type){
        case _alert.SET:
            return {
                ...state,
                variant: action.payload.variant,
                message:action.payload.message,
                open:false
            };
            case _alert.SETOPEN:
                return {...state,
                    open: action.payload
                }
        case _alert.RESET:
            return initialState.alert;
        default:
            return state;
    };
}
