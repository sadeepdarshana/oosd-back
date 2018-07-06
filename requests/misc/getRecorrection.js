var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {


    let exam = req.body.exam;

    console.log("getRecorrection");



    result = await main.db.collection("exams").findOne({_id:exam});

    res.status(200).json(result.recorrection);
    console.log("getRecorrection_success");
});

module.exports = router;