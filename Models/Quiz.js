const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title : {type : String},
    quiz : {type : Array, required : true},
    
})

module.exports = mongoose.model('Quizmodel',QuizSchema)