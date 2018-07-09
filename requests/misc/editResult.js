var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    _id= req.body.module_id;
    result = req.body.result;
    index = req.body.index;
    resulta = await main.db.collection('exams').findOne({_id : _id},{'fields':{"_id":0,"results":1}});
    x = resulta['results'];
    if(resulta){
            console.log("found" , index);
            await main.db.collection("exams").updateOne({_id:_id,"results.index": index.toString()},{$set : { "results.$.result":result}}, function(err, resi) {
                console.log("changed",index);
                res.status(200).json({resulto:200});
            });
        }else{
            console.log("not found");
            res.status(409).json({resulto:409});

        }



});

module.exports = router;
