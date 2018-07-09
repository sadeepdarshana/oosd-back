var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;
    module = req.body.module;

    console.log("subscribe",index,module);


    try {

        if (module==null || module =='');
        else
        await main.db.collection("members").updateOne({_id: index}, {$addToSet: {modules: module}});
    }catch(e){
        return e;
    }

    res.status(200).json({result:200});
    console.log("subscribe_success");


});

module.exports = router;