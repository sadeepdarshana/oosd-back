var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    batch = req.body.batch;

    console.log("createBatch",batch);



    entry = {_id:batch, semester:1};

    main.db.collection("batches").insertOne(entry, function(err, resi) {
        if (err) {
            res.status(409).json({result:409});
            return;
        }
        res.status(200).json({result:200});
        console.log("createBatch_success",batch);
    });
});

module.exports = router;