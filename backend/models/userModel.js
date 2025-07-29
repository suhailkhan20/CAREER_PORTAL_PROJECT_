import mongoose from 'mongoose'
// import { use } from 'react';    
import validator from 'validator'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email id is  required'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    location: {
        type: String,
        dafault: 'India'
    },
},{timestamps: true}
);

const userModel =  mongoose.model('User', userSchema)


export default userModel;