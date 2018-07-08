var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    let module_id = req.body.module_id;
    let result = req.body.result;


    await main.db.collection("exams").update({'_id':module_id},{$pull:{results :result}});



    //await main.db.collection("exams").update({_id: index},{$addToSet : {results :result}}


    res.status(200).json({result:200});

});

module.exports = router;
