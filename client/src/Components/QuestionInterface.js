import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { current } from "../Redux/Actions/AuthActions"
import { addQuiz } from "../Redux/Actions/QuizActions"



const QuestionInterface=()=>{
    

    // useEffect(()=>{
    //     dispatch(current())
    // },[])
    // const user = useSelector(state=>state.AuthReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const [Quiz, setQuiz] = useState([])

    // const [QT, setQT] = useState('')
    // const [QQ, setQQ] = useState('')
    // const [QOA, setQOA] = useState('')
    // const [QR, setQR] = useState([])
    const [quiz,setQuiz] = useState([])
    const [title,setTitle] = useState('')
    const [question,setQuestion] = useState('')
    const [reponse1,setReponse1] = useState('')
    const [reponse2,setReponse2] = useState('')
    const [reponse3,setReponse3] = useState('')
    const [reponse4,setReponse4] = useState('')
    
    const handleAddQustion=()=>{
        if(question == "" || reponse1 == "" || reponse2 == "" || reponse3 == "" || reponse4 == ""){
           return alert("Could not add question !!")
        }
        setQuiz([...quiz, {question : question, id : Math.random(),reponses : [{reponse : reponse1,id:Math.random(),qte : 0},{reponse : reponse2,id:Math.random(),qte : 0},{reponse : reponse3,id:Math.random(),qte : 0},{reponse : reponse4,id:Math.random(),qte : 0}]}])
        setQuestion('')
        setReponse1('')
        setReponse2('')
        setReponse3('')
        setReponse4('')
    }

    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(addQuiz({title,quiz},navigate))
    }
    return(
        <section>
      <div className="form-box">
          <div className="form-value">
                <div className="inputbox">
                <label>Quiz title</label>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text"/>
                </div>
 

                <div className="inputbox">
                <label>Question</label>
                <input value={question} onChange={(e)=> setQuestion(e.target.value)} type="text"/>
                <br/>
                </div>
                <label>Reponse 1</label>
                <input value={reponse1} onChange={(e)=> setReponse1(e.target.value)} type="text"/>
                <br/>
                <label>Reponse 2</label>
                <input value={reponse2} onChange={(e)=> setReponse2(e.target.value)} type="text"/>
                <br/>
                <label>Reponse 3</label>
                <input value={reponse3} onChange={(e)=> setReponse3(e.target.value)} type="text"/>
                <br/>
                <label>Reponse 4</label>
                <input value={reponse4} onChange={(e)=> setReponse4(e.target.value)} type="text"/>
               
                <br/><br/>
                <button onClick={handleAddQustion}>Add</button>

                <br/><br/>
                <h1>{title}</h1>
                {
                    quiz.map(el=>
                        <div>
                            <h1>Question : {el.question}</h1>
                            {
                                el.reponses.map(el=>
                                    <div>
                                        <h2>{el.reponse}</h2>                                      
                                    </div>
                                    )
                            }

                        </div>)
                }
                <button onClick={(e)=>handleAdd(e)}>Send Quiz</button>
                </div> 
       </div>
    </section>
    )
}

export default QuestionInterface