const Quiz = require("../Models/Quiz")


exports.addQuiz=async(req,res)=>{
    try {
        console.log(req.user)
        const found = await Quiz.findOne({title : req.body.title})
        if(found){
            return res.status(400).send('Quiz already exists')
        }
        const newQuiz = new Quiz({...req.body,owner : req.user._id})
        await newQuiz.save()
        res.status(200).send({msg:'Quiz Added',newQuiz})
    } catch (error) {
        res.status(500).send('Could not add the Quiz')
    }
}

exports.readQuizs=async(req,res)=>{
    try {
        const Quizs = await Quiz.find().populate('owner')
        
        res.status(200).send({msg:'Quiz List',Quizs})
    } catch (error) {
        res.status(500).send('Could not get the Quiz')
    }
}

exports.readOwnerQuizs=async(req,res)=>{
    try {
        const {id} = req.params
        const Quizs = await Quiz.find({owner : id}).populate('owner')
        
        res.status(200).send({msg:'Quiz List',Quizs})
    } catch (error) {
        res.status(500).send('Could not get the Quiz')
    }
}



exports.deleteQuiz=async(req,res)=>{
    try {
        const {id} = req.params
        await Quiz.findByIdAndDelete(id)
        res.status(200).send({msg : 'Quiz deleted'})
    } catch (error) {
        res.status(500).send('Could not delete Quiz')
    }
}

exports.readcurrentQuiz=async(req,res)=>{
    try {
        const {id} = req.params
        const oneQuiz = await Quiz.findById(id)
        res.status(200).send({msg:'The Quiz is',oneQuiz})
    } catch (error) {
        res.status(500).send('Could not get the Quiz')
    }
}

exports.updateQuiz=async(req,res)=>{
    try {
        const {id} = req.params
        await Quiz.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg : 'Quiz updated'})
    } catch (error) {
        res.status(500).send('Could not update Quiz')
    }
}