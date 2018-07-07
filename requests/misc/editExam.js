var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {


    module = req.body.module;
    date = req.body.date;
    startTime = req.body.startTime;
    venue = req.body.venue;

    console.log("editExam",module,date,startTime,venue);



    try {
        await main.db.collection("exams").updateOne({_id: module}, {
            $set: {
                date:date,
                startTime:startTime,
                venue:venue
            }
        });
        res.status(200).json({result:200});
        console.log("editExam success",index);
    }catch (e) {

        res.status(409).json({result:409});
    }

});

module.exports = router;
