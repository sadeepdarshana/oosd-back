var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {

    console.log("getBatches");

    result = await main.db.collection("batches").find();
    result = await result.toArray();
    res.status(200).json(result);
    console.log("createBatch_success",batch);
});

module.exports = router;