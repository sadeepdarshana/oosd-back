var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");
var authStore = require(require('path').dirname(require.main.filename)+"/authStore");


router.post('/', function (req, res) {
    
    mindex = req.body.index;
    mkey = req.body.key;



    console.log({index:mindex,key:mkey});

    if(authStore.checkAuth(mindex,mkey))
        main.db.collection("members").findOne({_id:mindex}, function(err, result) {
            if (err) throw err;
            console.log("userInfo_success",{index:mindex,key:mkey});
            res.status(200).json(result);
        });
    else {
        res.status(403).json({});
        console.log("userInfo_failed",{index:mindex,key:mkey});
    }
});

module.exports = router;