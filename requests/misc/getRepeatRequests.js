var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {


    let exam = req.body.exam;

    console.log("getRepeatRequests");



    result = await main.db.collection("exams").findOne({_id:exam});

    res.status(200).json(result.repeatRequests);
    console.log("getRepeatRequests_success");
});

module.exports = router;