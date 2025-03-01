import mongoose from 'mongoose';

var usersSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true
    },
    
    role: {
        type : String,
        required : true
    },
    
    email: {
        type : String,
        required : true
    },

    image: {
        type: String,
        required: false,
    },

    phone: {
        type : Number,
        required : false
    },   
    
    password: {
        type : String,
        required : true
    },

    banned: {
        type: Boolean,
        default: false, 
    },

    passwordResetToken: String,
    passwordResetExpires: Date,
})

const userDb = mongoose.model('users', usersSchema);

export default userDb;