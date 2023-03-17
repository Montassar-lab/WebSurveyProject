import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneQuiz, updateQuiz } from "../Redux/Actions/QuizActions"
import { current } from "../Redux/Actions/AuthActions"

const SurveyAnswer=()=>{
    
        const {id} = useParams()

        const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneQuiz(id)) 
        dispatch(current())
    },[])
   
    const oneQuiz = useSelector(state=>state.QuizReducer.oneQuiz)
    const user = useSelector(state=> state.AuthReducer.user)
    const [userId,setUserId] = useState(user._id)
    const [initialQuiz,setInitialQuiz] = useState(oneQuiz.quiz)
    const [quiz,setQuiz] = useState(oneQuiz.quiz)
    const [Answeredid,setAnsweredId] = useState(oneQuiz.Answeredid)
    const [show,setShow]= useState(false)

    
        useEffect(()=>{
        setQuiz(oneQuiz.quiz)
        // setAnsweredId(oneQuiz.Answeredid)
        setInitialQuiz(oneQuiz.quiz)
        },[oneQuiz])

        useEffect(()=>{
            setUserId(user._id)
            },[user._id])

        useEffect(() => {
            setAnsweredId(oneQuiz.Answeredid)
          }, [oneQuiz.Answeredid]);
    
    
    const handlerAnswer=(idq,idr)=>{
        // console.log('user id',userId)
        // console.log('monfirst',Answeredid)
        // setAnsweredId([...Answeredid, userId])
        // console.log('monnew',Answeredid)
       setAnsweredId([...Answeredid,user._id])  
       setQuiz(quiz.map((el,i)=> el.id == idq ? {...el,reponses : el.reponses.map((el,j)=> el.id == idr ? {...el,qte : el.qte+1}:{...el,qte : initialQuiz[i].reponses[j].qte})}:el))
       
    }



    const navigate = useNavigate()

    const handleResult=(a)=>{
        a.preventDefault()

        setAnsweredId([...Answeredid,user._id])  
        dispatch(updateQuiz({quiz,Answeredid},id))
    }
   
    return(

        <section>
      <div className="form-box">
          <div className="form-value">

        <form action="">

        
              { 
             user &&
                           
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
                    {/* <button variant="primary" type="submit" onClick={(e)=> handleResult(e)}> Submit </button> */}
                    <button variant="primary" type="submit" onClick={(e) => { handleResult(e); navigate('/profile'); }}> Submit </button>

                </div>)
                
            
                }

</form>
       </div> 
       </div>
    </section>
        
    )
    
}

export default SurveyAnswer