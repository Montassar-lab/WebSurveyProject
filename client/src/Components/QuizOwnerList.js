import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getMyQuizs } from "../Redux/Actions/QuizActions"
import QuizCard from "./QuizCard"

const QuizOwnerList=()=>{
    
    const {id}=useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMyQuizs(id))
    },[])
    const myQuizs = useSelector(state=>state.QuizReducer.myQuizs)
    return(
        <div>
            {myQuizs && myQuizs.map(el => <QuizCard key={el._id} el={el}/>  )}
        </div>
    )
}


export default QuizOwnerList