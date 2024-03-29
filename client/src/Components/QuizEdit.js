import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneQuiz, updateQuiz } from "../Redux/Actions/QuizActions"
import {Form,Button} from 'react-bootstrap'

const QuizEdit=()=>{
    
        const {id} = useParams()
        const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneQuiz(id))
    },[dispatch,id])

    const oneQuiz = useSelector(state=>state.QuizReducer.oneQuiz)

    const [quiz,setQuiz] = useState(oneQuiz.quiz)
    const [title,setTitle] = useState(oneQuiz.title)
 
    

        useEffect(()=>{
        setQuiz(oneQuiz.quiz)
        setTitle(oneQuiz.title)
        
    },[oneQuiz])
    
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateQuiz({title,quiz},id,navigate))
        
    }
    const handleChangeQuestion=(id,a)=>{
        setQuiz(quiz.map(el=> el.id == id ? {...el,question : a} : el))
    }

    const handleChangeReponse=(idq,idr,a)=>{
        setQuiz(quiz.map(el=> el.id == idq ? {...el,reponses : el.reponses.map(el=>el.id == idr ? {...el,reponse : a}:el)}:el))
    }
    return(

        <section>
      <div className="form-box">
          <div className="form-value">

        <form action="">

                   
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quiz Title</Form.Label>
                    <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter Title" />       
                </Form.Group>


               
               {    oneQuiz.quiz &&
                    oneQuiz.quiz.map((el,i)=>
                        <>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Quiz Question:</Form.Label>
                
                         <Form.Control defaultValue={el.question} onChange={(e)=>handleChangeQuestion(el.id,e.target.value)} type="text" placeholder="Enter Title" />       
                        
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Reponses:</Form.Label>
                        {
                            el.reponses.map((el)=>
                                <>
                                  
                                    <Form.Control defaultValue={el.reponse} onChange={(e)=> handleChangeReponse(quiz[i].id,el.id,e.target.value)}  type="text" placeholder="Enter Title" /> 
                                   
                               
                                </>)
                        }
                         </Form.Group>
                        </>)
                        
                    }
                <button onClick={(e)=>handleEdit(e)}>Submit</button>
                

            
                </form>
       </div> 
       </div>
    </section>
        
    )
    
}

export default QuizEdit