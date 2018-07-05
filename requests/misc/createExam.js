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

    main.db.collection("modules").insertOne(entry, function(err, resi) {
        if (err) {
            res.status(409).json({result:409});
            return;
        }
        res.status(200).json({result:200});
        console.log("createModule",batch+"_"+moduleCode);
    });
});

module.exports = router;