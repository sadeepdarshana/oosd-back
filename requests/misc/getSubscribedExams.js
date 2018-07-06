var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {


    mindex = req.body.index;

    console.log("getSubscribedExams");



    let result = (await main.db.collection("members").findOne({_id:mindex})).modules;
    let result2 = await main.db.collection("exams").find({_id:{$in:result}});

    let repeat = (await main.db.collection("members").findOne({_id:mindex})).repeatModules;
    let repeat2 = await main.db.collection("exams").find({_id:{$in:repeat}});



    result2= await result2.toArray();
    repeat2= await repeat2.toArray();

    result2 = result2.concat(repeat2);

    res.status(200).json(result2);
    console.log("getSubscribedExams_success");
});

module.exports = router;