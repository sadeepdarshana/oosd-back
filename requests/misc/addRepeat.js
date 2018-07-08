var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;
    exam = req.body.exam;

    console.log("addRepeat",index,exam);


    try {
        await main.db.collection("exams").updateOne({_id: exam}, {$addToSet: {repeat: index}});
        await main.db.collection("members").updateOne({_id: index}, {$addToSet: {repeatModules: exam}});
    }catch{return;}

    res.status(200).json({result:200});
    console.log("addRepeat_success");


});

module.exports = router;