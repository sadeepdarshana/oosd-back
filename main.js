
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
app.use('/addRepeat', require('./requests/misc/addRepeat.js'));
app.use('/getUserInquiries', require('./requests/misc/getUserInquiries.js'));
app.use('/contactAdmin', require('./requests/misc/contactAdmin.js'));
app.use('/getRecorrectableExams', require('./requests/misc/getRecorrectableExams.js'));
app.use('/getRepeatRequests', require('./requests/misc/getRepeatRequests.js'));
app.use('/applyRepeat', require('./requests/misc/applyRepeat.js'));
app.use('/applyRecorrection', require('./requests/misc/applyRecorrection.js'));
app.use('/getRecorrection', require('./requests/misc/getRecorrection.js'));
app.use('/applyRecorrection', require('./requests/misc/applyRecorrection.js'));
app.use('/getRecorrection', require('./requests/misc/getRecorrection.js'));
app.use('/addResult', require('./requests/misc/addResult.js'));
app.use('/getResult', require('./requests/misc/getResult.js'));
app.use('/editResult', require('./requests/misc/editResult.js'));
app.use('/getAllResult', require('./requests/misc/getAllResults.js'));
app.use('/createExam', require('./requests/misc/createExam.js'));
app.use('/deleteExam', require('./requests/misc/deleteExam.js'));
app.use('/getExam', require('./requests/misc/getExam.js'));;
app.use('/getSubscribedModules', require('./requests/misc/getSubscribedModules.js'));;
app.use('/getSubscribedExams', require('./requests/misc/getSubscribedExams.js'));;
app.use('/editExam', require('./requests/misc/editExam.js'));;
app.use('/getAllExams', require('./requests/misc/getAllExams.js'));
app.use('/getNotices', require('./requests/misc/getNotices.js'));
app.use('/sendNotices', require('./requests/misc/sendNotices.js'));
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
app.use('/viewStudents', require('./requests/misc/viewStudentList.js'));
app.use('/sendNotices', require('./requests/misc/sendNotices.js'));
app.use('/getAllModuleDetails', require('./requests/misc/getAllModuleDetails.js'));

app.use('/auth', require('./requests/user/auth.js'));


app.listen(8082);
