var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {

    console.log("getAllExams");

    result = await main.db.collection("exams").find({},{'fields':{ "students":1}});

    result = await result.toArray();
    res.status(200).json(result);
    console.log("getAllExams_success");
});

module.exports = router;