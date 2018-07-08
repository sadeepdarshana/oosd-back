var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    mindex = req.body.index;
    console.log("getSubscribedModules");
    result = await main.db.collection("members").findOne({_id:mindex});
    console.log(result);
    res.status(200).json(result.modules);
    console.log(result.modules);
});

module.exports = router;
