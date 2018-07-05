
var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");
var utils = require(require('path').dirname(require.main.filename)+"/utils");
var authStore = require(require('path').dirname(require.main.filename)+"/authStore");


router.post('/', function (req, res) {

    mindex = req.body.index;
    mpw = req.body.pw;

    console.log("auth",mindex,mpw);

    mpw = require('crypto').createHash('md5').update(mpw).digest('hex');

    main.db.collection('members').findOne({ _id: mindex, pw: mpw }, function(err, doc){
        if(doc) 
            res.status(202).json(   {key : authStore.addAuth(mindex)}     );
        else
            res.status(401).json(   {key : -1}     );
    });

});

module.exports = router;