var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;

    result = await main.db.collection('modules').findOne({_id : index},{'fields':{"_id":0,"messages":1}});
    console.log("got all")
    res.status(200).json(result);

});

module.exports = router;