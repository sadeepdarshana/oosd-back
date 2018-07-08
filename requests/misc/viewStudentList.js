var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    _id = req.body.module_id;
    console.log("View students");
    result = await main.db.collection("modules").findOne({_id:_id},{'fields':{"_id":1,"students":1,"batch":1,"semester":1}});
    console.log(result);
    res.status(200).json(result);
    console.log("viewe_success");

});

module.exports = router;
