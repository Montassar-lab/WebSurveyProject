const express = require('express')
const { addQuiz, readQuizs, deleteQuiz, readcurrentQuiz, updateQuiz } = require('../Controllers/Quiz')

const QuizRouter = express.Router()


QuizRouter.post('/addQuiz',addQuiz)
QuizRouter.get('/readQuizs',readQuizs)
QuizRouter.delete('/deleteQuiz/:id',deleteQuiz)
QuizRouter.get('/readcurrentquiz/:id',readcurrentQuiz)
QuizRouter.put('/updateQuiz/:id',updateQuiz)

module.exports = QuizRouter