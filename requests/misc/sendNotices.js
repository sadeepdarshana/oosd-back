var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    module_id = req.body.module_id;
    message = req.body.message;
    console.log("sent to all");
    result = await main.db.collection('modules').updateOne({_id:module_id},{$set :{message : message } }, function(err,res){
            if (err) throw err;
            console.log("send all")
        });
    res.status(200).json({result:200});

});

module.exports = router;