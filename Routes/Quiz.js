const express = require('express')
const { addQuiz, readQuizs, deleteQuiz, readcurrentQuiz, updateQuiz, readOwnerQuizs } = require('../Controllers/Quiz')
const isAuth = require('../Middlewares/isAuth')

const QuizRouter = express.Router()


QuizRouter.post('/addQuiz',isAuth,addQuiz)
QuizRouter.get('/readQuizs',readQuizs)
QuizRouter.get('/readOwnerQuizs/:id',readOwnerQuizs)
QuizRouter.delete('/deleteQuiz/:id',deleteQuiz)
QuizRouter.get('/readcurrentquiz/:id',readcurrentQuiz)
QuizRouter.put('/updateQuiz/:id',updateQuiz)

module.exports = QuizRouter