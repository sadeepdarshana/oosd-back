var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {

    console.log("getAllModules");

    result = await main.db.collection("contact").find();

    result = await result.toArray();


    res.status(200).json(result);
    console.log("getAllModules_success");
});

module.exports = router;