var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.module_id;
    result = req.body.result;
    console.log("results", result);
    resulta = await main.db.collection('exams').findOne({_id : index},{'fields':{"_id":0,"results":1}});
    if(resulta ){
        await main.db.collection("exams").updateOne({_id: index},{$addToSet : {results :result}}, function(err, resi) {
            if (err) {
                res.status(409).json({result:409});
                return;
            }
            console.log("added");
            res.status(200).json({result:200});
        });
    }else{
        console.log("not subcribed student or not available for exams")
        res.status(409).json({result:409});
    }

});

module.exports = router;
