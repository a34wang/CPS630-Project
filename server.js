var express = require('express');
var app = express();
var port = 8080 || process.env.PORT;
var mongoose = require('mongoose');
var morgan = require("morgan");
var db = mongoose.connection;
app.use(morgan('dev'));
//default route
app.get('/', function (req, res) {
    res.send("hello")
});
app.get('/test', function (req, res) {
    res.send("hi")
});
mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(" we're connected!");
});
//start server 
app.listen(port,function()
{console.log("Server listening at port :" + port);
});

