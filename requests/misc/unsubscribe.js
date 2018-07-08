var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;
    module = req.body.module;
    console.log("unsubscribe",index,module);
    try {
        await main.db.collection("members").updateOne({_id: index}, {$pull: {modules: module}});
    }catch(e){
        return e;
    }
    res.status(200).json({result:200});
    console.log("unsubscribe_success");


});

module.exports = router;
