var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('./api/models/todoListModels');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb+srv://sanjana:sanjana@cluster0-rodrs.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true} ,function(){
    console.log('connected to DB')});
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log(`We are listening to port ${port}`);