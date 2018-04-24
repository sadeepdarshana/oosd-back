
var express = require('express');


var app = express();

var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));


var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongoDatabase = "winter";


MongoClient.connect(url, function(err, database) {
    if(err) { return console.dir(err); }
    module.exports.db = database.db(mongoDatabase);
  });


app.use('/firstRun', require('./requests/misc/firstRun.js'));

app.use('/createUser', require('./requests/user/createUser.js'));
app.use('/userInfo', require('./requests/user/userInfo.js'));
app.use('/auth', require('./requests/user/auth.js'));     


var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   
   
})