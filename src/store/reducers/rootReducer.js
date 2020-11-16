import {combineReducers} from 'redux'
import quizReducer from './quiz'
import authReducer from "./auth";
import createReducer from "./create";

export default combineReducers({
    quiz: quizReducer,
    create: createReducer,
    auth: authReducer,
})