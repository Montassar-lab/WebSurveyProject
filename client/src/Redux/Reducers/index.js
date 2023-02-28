import {combineReducers} from "redux"
import AuthReducer from "./AuthReducer"
import ErrorReducer from "./ErrorReducer"
import QuizReducer from "./QuizReducer"

const rootReducer = combineReducers({AuthReducer,ErrorReducer, QuizReducer})

export default rootReducer