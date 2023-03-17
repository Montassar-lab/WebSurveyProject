const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const Quiz = require('../Models/Quiz');
const User = require('../Models/User');

exports.signUp=async(req,res)=>{
    try {
        
        const {email,password} = req.body

        const found = await User.findOne({email})

        if (found) {
            return res.status(400).send({errors : [{msg : 'Email used'}]})
        }

        const newUser = new User(req.body)

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        newUser.password = hashPassword
        
        await newUser.save()
        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })
        
        res.status(200).send({Msg:'User Added',newUser,token})


    } catch (error) {

        res.status(500).send({errors : [{msg :'Could not SignUp'}]})
    }
}


exports.signIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : 'Email not exist'}]})
        }

        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
            return res.status(400).send({errors : [{msg : 'Wrong password'}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '1h' })

        res.status(200).send({Msg : 'Logged In',found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg :'Could not SignIn'}]})
    }
}

exports.updateUser=async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg : 'User updated'})
    } catch (error) {
        res.status(500).send('Could not update User')
    }
}

exports.readUsers=async(req,res)=>{
    try {
        const Users = await User.find()
        res.status(200).send({msg : "List of Users",Users})
    } catch (error) {
        res.status(500).send('Could not get Users')
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        const {id} = req.params
        const quizs = await Quiz.find()
        for (let i = 0; i < quizs.length; i++) {
            if(quizs[i].owner == id){
                await Quiz.findByIdAndDelete(quizs[i]._id)
            }         
            
        }
        await User.findByIdAndDelete(id)

       
       
        res.status(200).send({Msg : 'User deleted'})
    } catch (error) {
        res.status(500).send('Could not delete User')
    }
}

exports.readUser=async(req,res)=>{
    try {
        const {id} = req.params
        const oneUser = await User.findById(id)
        res.status(200).send({Msg:'The User is',oneUser})
    } catch (error) {
        res.status(500).send('Could not get User')
    }
}