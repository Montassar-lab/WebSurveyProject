import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuizs } from "../Redux/Actions/QuizActions"
import QuizCard from "./QuizCard"


const Quizlist=()=>{

    const dispatch = useDispatch()
    const quizs = useSelector(state=>state.QuizReducer.Quizs)

    useEffect(()=>{
        dispatch(getQuizs())
    },[])
    return(
        <div>
            {quizs && quizs.map(el => <QuizCard key={el._id} el={el}/>  )}
        </div>
    )
}

export default Quizlist