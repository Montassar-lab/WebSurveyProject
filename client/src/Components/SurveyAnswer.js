import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneQuiz, updateQuiz } from "../Redux/Actions/QuizActions"
import {Button} from 'react-bootstrap'

const SurveyAnswer=()=>{
    
        const {id} = useParams()

        const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneQuiz(id))
    },[])

    const oneQuiz = useSelector(state=>state.QuizReducer.oneQuiz)

    const [initialQuiz,setInitialQuiz] = useState(oneQuiz.quiz)
    const [quiz,setQuiz] = useState(oneQuiz.quiz)
    
  

        useEffect(()=>{
        setQuiz(oneQuiz.quiz)
        setInitialQuiz(oneQuiz.quiz)
        },[oneQuiz])
    
    
    const handlerAnswer=(idq,idr)=>{
    
       setQuiz(quiz.map((el,i)=> el.id == idq ? {...el,reponses : el.reponses.map((el,j)=> el.id == idr ? {...el,qte : el.qte+1}:{...el,qte : initialQuiz[i].reponses[j].qte})}:el))
    }

    const navigate = useNavigate()
    const handleResult=(a)=>{
        a.preventDefault()
        dispatch(updateQuiz({quiz},id,navigate))
    }
   
    return(

        <div>
            
            {
                oneQuiz.quiz && oneQuiz.quiz.map((el,i)=> 
                <div key={`quiz-${i}`}>
                    <h2>{el.question}</h2>
                    {
                        el.reponses.map((el,j)=> 
                            <div key={`reponse-${j}`}>
                                <input type="radio" 
                            id={`response-${j}`} 
                            name={`response-${i}`} 
                            value={el.reponse}
                            onClick={()=>handlerAnswer(quiz[i].id,el.id)}
                            />
                                <label htmlFor={`response-${j}`}>{el.reponse}</label>
                            </div>)
                    }
                </div>)
            }
            
            <Button variant="primary" type="submit" onClick={(e)=>handleResult(e)}> Submit </Button>
            
        </div>
        
    )
    
}

export default SurveyAnswer