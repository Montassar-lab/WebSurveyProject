const express = require('express')
const { signUp, signIn, updateUser, readUsers, deleteUser, readUser } = require('../Controllers/User')
const isAuth = require('../Middlewares/isAuth')
const { registerValidation, Validation, logginValidation } = require('../Middlewares/Validator')




const userRouter = express.Router()


userRouter.post('/auth/SignUp',registerValidation,Validation,signUp)
userRouter.post('/auth/SignIn',logginValidation,Validation,signIn)
userRouter.get('/currentUser',isAuth,(req,res)=>res.send(req.user))
userRouter.get('/readUsers',readUsers)
userRouter.put('/updateUser/:id',updateUser)
userRouter.delete('/deleteUser/:id',deleteUser)
userRouter.get('/readUser/:id',readUser)

module.exports = userRouter