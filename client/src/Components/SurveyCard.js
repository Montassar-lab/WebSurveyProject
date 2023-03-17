import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { current } from "../Redux/Actions/AuthActions";
import { getOneQuiz } from "../Redux/Actions/QuizActions";



const SurveyCard=({el})=>{

    const token = localStorage.getItem("token")
    const user = useSelector(state=> state.AuthReducer.user)
    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(()=>{
        dispatch(getOneQuiz(id)) 
        dispatch(current())
    },[])
   
    const oneQuiz = useSelector(state=>state.QuizReducer.oneQuiz)

    const totalid = oneQuiz.Answeredid
    const [show,setShow] = useState(false)

    {totalid && totalid.forEach(el => el === user._id && setShow(true))}


       return(
    <section>
        <div className="form-box">
            <div className="form-value">
  
          <form action="">
  
          
                {
                    (token && user.role == 'professional') ?
                        <>
                            <h2>{el.title}</h2> 
                            <button><Link style={{color : "black",textDecoration:'none'}} to={`/SurveyResult/${el._id}` }>survey Result</Link></button>
                        </>        
                        :
                        
                        (token && user.role == 'user')?

                       
                            show ? <h2>No Quiz</h2> : 
                            <>
                            <h2>{el.title}</h2>                          
                            <button><Link style={{color : "black",textDecoration:'none'}} to={`/SurveyAnswer/${el._id}` }>answer this survey</Link></button>
                            </>
                        :
                        <>
                            <button><Link style={{color : "black",textDecoration:'none'}} to={`/SurveyAnswer/${el._id}` }>answer this survey</Link></button>
                            <button><Link style={{color : "black",textDecoration:'none'}} to={`/SurveyResult/${el._id}` }>survey Result</Link></button>
                        </>
                }
            </form>
       </div> 
       </div>
    </section>
    )
}

export default SurveyCard