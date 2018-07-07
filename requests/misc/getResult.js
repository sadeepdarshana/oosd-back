var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;
    _id = req.body.module_id;

    result = await main.db.collection('exams').findOne({_id : _id},{'fields':{"_id":0,"results":1}});
    console.log(result['results'][2]);
    let x = result['results'][2];
    res.status(200).json(result['results'][2]);

});

module.exports = router;
