var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {

    module = req.body.module;
    console.log("getExam");


    result = await main.db.collection("exams").findOne({_id:module},{'fields':{"students":0}});

    res.status(200).json(result);
    console.log("getExam_success");
});

module.exports = router;