const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title : {type : String},
    quiz : {type : Array, required : true},
    owner : {
        type : mongoose.Types.ObjectId,
        ref : 'Usermodel'
    },
    Answeredid : Array
    
})

module.exports = mongoose.model('Quizmodel',QuizSchema)