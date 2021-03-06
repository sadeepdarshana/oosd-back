var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    module = req.body.module;
    date = req.body.date;
    startTime = req.body.startTime;
    venue = req.body.venue;

    console.log("createExam",module,date,startTime,venue);



    entry = {_id:module, date:date, startTime:startTime, venue:venue}

    try {
        main.db.collection("exams").insertOne(entry);
        res.status(200).json({result: 200});
        console.log("createExam_success",module,date,startTime,venue);
    }catch (e) {
        res.status(409).json({result:409});
    }
});

module.exports = router;