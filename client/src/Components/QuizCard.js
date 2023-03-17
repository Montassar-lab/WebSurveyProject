import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteQuiz } from "../Redux/Actions/QuizActions"

const QuizCard=({el})=>{

    const dispatch = useDispatch()
    return(
        <section>
        <div className="form-box">
            <div className="form-value">
  
          <form action="">
            
                    
                    <h2>{el.owner.name}</h2>
                    <h3>{el.title}</h3>
                    
                    {el.quiz && el.quiz.map((el, id) => (
                                                        <div key={`quiz-${id}`}>
                                                            <h5>{el.question}</h5>
                                                            {el.reponses && el.reponses.map((el, id) => (
                                                                                                        <div key={`reponse-${id}`}>
                                                                                                            <h6>{el.reponse}</h6>
                                                                                                           
                                                                                                        </div>))}
                                                        </div> ))}
                    <div className="register">
                   
                    <button> <Link style={{color : "black",textDecoration:'none'}} to={`/editQuiz/${el._id}`}>Edit</Link></button>
                            
                   {/* <Button as={Link} to={`/editQuiz/${el._id}`}>Edit</Button> */}
                   <button onClick={()=>dispatch(deleteQuiz(el._id))}>Delete</button>
                    {/* <Button variant="danger" onClick={()=>dispatch(deleteQuiz(el._id))} >Delete</Button> */}
                    </div>
           
                    </form>
       </div> 
       </div>
    </section>
       
    )
}

export default QuizCard