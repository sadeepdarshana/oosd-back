var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {

    index = req.body.index;
    console.log("getProfile");


    result = await main.db.collection("members").findOne({_id:index},{'fields':{"pw":0, "modules":0}});

    res.status(200).json(result);
    console.log("getProfile_success");
});

module.exports = router;