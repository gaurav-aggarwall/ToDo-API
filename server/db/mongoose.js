const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const URI = "mongodb://TEST_USER_1:akku2223@todo-api-shard-00-00-brcin.mongodb.net:27017,todo-api-shard-00-01-brcin.mongodb.net:27017,todo-api-shard-00-02-brcin.mongodb.net:27017/test?ssl=true&replicaSet=ToDo-API-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};