const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {type : String},
    cin : {type : Number},
    matriculefiscale : {type : Number},
    age : {type : Number},
    adress : {type : String},
    nationality : {type : String},
    highesteducationlevel : {type : String},
    tel : {type : Number},
    email : {type : String, required : true, unique : true},
    password :{type:String, required : true}
})

module.exports = mongoose.model('Usermodel',userSchema)