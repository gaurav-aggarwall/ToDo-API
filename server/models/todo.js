const mongoose = require('mongoose');

const Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Boolean,
        default: null
    }
});

module.exports = {Todo};