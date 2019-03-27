var express = require('express');
var app = express();
var port = 8080 || process.env.PORT;
var mongoose = require('mongoose');
var morgan = require("morgan");
var db = mongoose.connection;
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json()); // Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/api', appRoutes);
app.use(express.static(__dirname +'/public'));

mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(" we're connected to data base!");
});

app.get('*',function(req,res){
 res.sendFile(path.join(__dirname + '/public/app/views/index.html'));

    
});


//start server 
app.listen(port,function()
{console.log("Server listening at port :" + port);
});

