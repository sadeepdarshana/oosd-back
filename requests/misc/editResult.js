var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    _id= req.body.module_id;
    result = req.body.result;
    index = req.body.index;
     main.db.collection("exams").updateOne({_id:_id,"results.index": index.toString()},{$set : { "results.$.result":result} });
});

module.exports = router;
