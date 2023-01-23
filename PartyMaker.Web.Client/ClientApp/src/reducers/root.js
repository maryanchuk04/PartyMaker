import { reducer as formReducer } from 'redux-form';
import * as Supplier from './supplier';
import * as Alert from './alert'
import * as Login from './login'

const rootReducers = {
    form: formReducer,
    supplier : Supplier.reducer,
    alert : Alert.reducer,
    login : Login.reducer,
    
}

export default rootReducers;