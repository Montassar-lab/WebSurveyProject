import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneQuiz } from "../Redux/Actions/QuizActions"


const SurveyResult = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getOneQuiz(id))
},[])

const oneQuiz = useSelector(state=>state.QuizReducer.oneQuiz)

const [quiz,setQuiz] = useState(oneQuiz.quiz)
const title = oneQuiz.title



  useEffect(()=>{
  setQuiz(oneQuiz.quiz)
  },[oneQuiz])

  const options = {
   
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true
      }
    }
  };

  return (

    <section>
      
      <div className="form-value">
    <div className='barchart'>

      <h1>{title}</h1>
      {quiz && quiz.map((el) => (
        <div key={el.id}>

          
          <h3>{el.question}</h3>
          <Bar
            data={{
              labels: el.reponses.map((el) => el.reponse),
              datasets: [{
                label: '# of Votes',
                data: el.reponses.map((el) => el.qte),
                borderWidth: 1
              }]
            }}
            options={options}
          />
        </div>
      ))}
    </div> 
    </div>  
    </section> 
  );
  
}

export default SurveyResult;
