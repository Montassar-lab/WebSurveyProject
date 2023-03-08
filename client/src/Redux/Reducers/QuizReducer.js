import { FAIL, GETMYQUIZS, GETONEQUIZ, GETQUIZS } from "../Actiontypes/Quiztypes"

const initialState={
    Quizs : [],
    errors : [],
    oneQuiz : {},
    myQuizs : []
}

const QuizReducer=(state = initialState,action)=>{
    switch (action.type) {

        case FAIL : return {...state,errors : action.payload.errors, Quizs : null}
        case GETQUIZS : return {...state, Quizs : action.payload}
        case GETMYQUIZS : return {...state, myQuizs : action.payload}
        case GETONEQUIZ : return {...state, oneQuiz : action.payload}
        

        default: return state
    }
}

export default QuizReducer