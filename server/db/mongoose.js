const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('http://localhost:27017/TodoApp');

module.exports = {mongoose};