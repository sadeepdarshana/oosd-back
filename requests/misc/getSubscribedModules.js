var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {


    mindex = req.body.index;

    console.log("getSubscribedModules");



    result = await main.db.collection("members").findOne({_id:mindex});

    res.status(200).json(result.modules||[]);
    console.log("getSubscribedModules_success");
});

module.exports = router;