var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    let index = req.body.index;

    let result = await main.db.collection('modules').findOne({_id : index});
    console.log("got all");
    res.status(200).json(result.messages);

});

module.exports = router;