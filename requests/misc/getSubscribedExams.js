var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {


    mindex = req.body.index;

    console.log("getSubscribedExams");



    let result = (await main.db.collection("members").findOne({_id:mindex})).modules;
    let result2 = await main.db.collection("exams").find({_id:{$in:result}});

    result2= await result2.toArray();

    res.status(200).json(result2);
    console.log("getSubscribedExams_success");
});

module.exports = router;