var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    index = req.body.module_id;
    result = req.body.result;

    main.db.collection("exams").updateOne({_id: index},{$addToSet : {results :result}}, function(err, resi) {
        if (err) {
            res.status(409).json({result:409});
            return;
        }
        res.status(200).json({result:200});
    });
});

module.exports = router;