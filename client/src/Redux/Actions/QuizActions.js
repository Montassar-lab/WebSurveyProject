import axios from "axios"
import { FAIL, GETONEQUIZ, GETQUIZS } from "../Actiontypes/Quiztypes"



export const getQuizs=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/Quiz/readQuizs')
        dispatch({
            type : GETQUIZS,
            payload : res.data.Quizs

        })
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}


export const addQuiz=(newQuiz,navigate)=>async(dispatch)=>{
    try {
        await axios.post('api/Quiz/addQuiz',newQuiz)
        dispatch(getQuizs())
        navigate('/QuestionInterface')
    } catch (error) {
        console.log(error)
    }
}

export const deleteQuiz=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/Quiz/deleteQuiz/${id}`)
        dispatch(getQuizs())
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}


export const getOneQuiz=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/Quiz/readcurrentquiz/${id}`)
        dispatch({
            type : GETONEQUIZ,
            payload : res.data.oneQuiz
        })
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}


export const updateQuiz=(upQuiz,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/Quiz/updateQuiz/${id}`,upQuiz)
        dispatch(getQuizs())
        navigate('/QuizList')
        
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}