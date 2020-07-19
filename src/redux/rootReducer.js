import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
    authRoot: authReducer,
});

export default rootReducer;