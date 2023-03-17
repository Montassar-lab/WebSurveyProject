const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {type : String},
    cin : {type : Number, required : true},
    email : {type : String, required : true, unique : true},
    password :{type:String, required : true},
    role : {type : String}
})

module.exports = mongoose.model('Usermodel',userSchema)