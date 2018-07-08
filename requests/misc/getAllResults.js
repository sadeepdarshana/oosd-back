var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    _id = req.body.module_id;
    result = await main.db.collection('exams').findOne({_id : _id},{'fields':{"_id":0,"results":1}});
    let x = result['results'];
    res.status(200).json(x);

});

module.exports = router;
