import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteQuiz } from "../Redux/Actions/QuizActions"

const QuizCard=({el})=>{

    const dispatch = useDispatch()
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>

                    <Card.Title>{el.title}</Card.Title>
                    
                    {el.quiz && el.quiz.map((el, id) => (
                                                        <div key={`quiz-${id}`}>
                                                            <h5>{el.question}</h5>
                                                            {el.reponses && el.reponses.map((el, id) => (
                                                                                                        <div key={`reponse-${id}`}>
                                                                                                            <h6>{el.reponse}</h6>
                                                                                                           
                                                                                                        </div>))}
                                                        </div> ))}
                   
                   <Button as={Link} to={`/editQuiz/${el._id}`}>Edit</Button>
                    <Button variant="danger" onClick={()=>dispatch(deleteQuiz(el._id))} >Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuizCard