const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {todo} = require('./models/todo');
const {user} = require('./models/user');

const app = express();

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});

