var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    mindex = req.body.index;
    mpw = req.body.pw;
    maccountType = req.body.accountType;


    console.log("userCreate",mindex,mpw,maccountType);


    mpw = require('crypto').createHash('md5').update(mpw).digest('hex');


    member = {_id:mindex, pw:mpw, accountType:maccountType}

    main.db.collection("members").insertOne(member, function(err, resi) {
        if (err) {
            res.status(409).json({result:409});
            return;
        }
        res.status(200).json({result:200});
        console.log("userCreate_success",mindex,mpw,maccountType);
    });
});

module.exports = router;