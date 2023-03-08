import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuizs } from "../Redux/Actions/QuizActions"
import SurveyCard from "./SurveyCard"



const Survey=()=>{
    const dispatch = useDispatch()
    const quizs = useSelector(state=>state.QuizReducer.Quizs)

    useEffect(()=>{
        dispatch(getQuizs())
    },[])
    return(
        <div>
            {quizs.map(el=> <SurveyCard el={el}/>)}
                                                                
        </div>
    )
}

export default Survey