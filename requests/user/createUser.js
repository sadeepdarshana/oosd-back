var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    mindex = req.body.index;
    mpw = req.body.pw;
    mname = req.body.name;
    maccountType = req.body.accountType;

    member = {_id:mindex, pw:mpw, name:mname, accountType:maccountType}

    console.log("userCreate",mindex,mpw,mname,maccountType);


    main.db.collection("members").insertOne(member, function(err, resi) {
        if (err) {
            res.status(409).json({result:409});
            return;
        }
        res.status(200).json({result:200});
        console.log("userCreate_success",mindex,mpw,mname,maccountType);
    });
});

module.exports = router;