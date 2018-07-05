
var express = require('express');

var app = express();

var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));


var bodyParser = require('body-parser');
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
app.use('/createExam', require('./requests/misc/createExam.js'));
app.use('/deleteExam', require('./requests/misc/deleteExam.js'));
app.use('/getExam', require('./requests/misc/getExam.js'));;
app.use('/editExam', require('./requests/misc/editExam.js'));;
app.use('/getAllExams', require('./requests/misc/getAllExams.js'));
app.use('/createUser', require('./requests/user/createUser.js'));
app.use('/createModule', require('./requests/misc/createModule.js'));
app.use('/createBatch', require('./requests/misc/createBatch.js'));
app.use('/getBatches', require('./requests/misc/getBatches.js'));
app.use('/getAllModules', require('./requests/misc/getAllModules.js'));
app.use('/changePass', require('./requests/user/changePass.js'));
app.use('/userInfo', require('./requests/user/userInfo.js'));
app.use('/subscribe', require('./requests/misc/subscribe.js'));
app.use('/ssubscribe', require('./requests/misc/ssubscribe.js'));
app.use('/setProfile', require('./requests/misc/setProfile.js'));
app.use('/getProfile', require('./requests/misc/getProfile.js'));
app.use('/unsubscribe', require('./requests/misc/unsubscribe.js'));
app.use('/sunsubscribe', require('./requests/misc/sunsubscribe.js'));
app.use('/auth', require('./requests/user/auth.js'));     


app.listen(8082);