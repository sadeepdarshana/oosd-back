var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");
var authStore = require(require('path').dirname(require.main.filename)+"/authStore");


router.get('/', function (req, res) {
    mindex = req.query.index;
    mkey = req.query.key;

    //console.log(authStore.checkAuth(mindex,mkey));

    if(authStore.checkAuth(mindex,mkey))
        main.db.collection("members").findOne({_id:mindex}, function(err, result) {
            if (err) throw err;
            res.status(200).json(result);
        });
    else 
        res.status(403).json({});
});

module.exports = router;