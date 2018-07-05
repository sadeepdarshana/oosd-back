var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    module = req.body.module;

    console.log("deleteExam",module);


    try {
        main.db.collection("exams").remove({_id:module});
        res.status(200).json({result: 200});
        console.log("deleteExam_success",module,date,startTime,venue);
    }catch (e) {
        res.status(409).json({result:409});
    }
});

module.exports = router;