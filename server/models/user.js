const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function (){
    let userObj = this.toObject(); 
    return _.pick(userObj, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function (){
    let access = 'auth';

    // creates a token with salt 'abc123'
    let token = jwt.sign({_id: this._id.toHexString(), access}, 'abc123').toString();
    this.tokens = this.tokens.concat([{access, token}]);
    return token;
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};