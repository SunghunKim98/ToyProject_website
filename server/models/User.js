const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 20
    },
    email: {
        type: String,
        maxlength: 50,
        trim: true, //띄어쓰기를 알아서 정리해주는(삭제해주는 역할 )
        unique: 1
    },
    password: {
        type: String,
        maxlength: 30
    },
    role: {
        type: Number,
        default: 0
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User',userSchema);

module.exports = { User }