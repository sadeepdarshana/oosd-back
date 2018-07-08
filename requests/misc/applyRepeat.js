var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;
    exam = req.body.exam;

    console.log("applyRepeat",index,exam);


    try {
        await main.db.collection("exams").updateOne({_id: exam}, {$addToSet: {repeatRequests: index}});
    }catch{return;}

    res.status(200).json({result:200});
    console.log("applyRepeat_success");


});

module.exports = router;