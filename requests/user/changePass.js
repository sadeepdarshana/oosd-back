var express = require('express');
var authStore = require(require('path').dirname(require.main.filename)+"/authStore");
var auth = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {

    mindex = req.body.index;
    old = req.body.old;
    neww = req.body.new;
    key = req.body.key;



    console.log("changePass",mindex,old,neww);

    if(!authStore.checkAuth(mindex,key)){
        res.json({result:400});
        return;
    }

    neww = require('crypto').createHash('md5').update(neww).digest('hex');
    old = require('crypto').createHash('md5').update(old).digest('hex');


    try {
        let u  =await main.db.collection('members').findOne({_id: mindex, pw: old});
        if(u==null){
            res.json(   {result:400}     );
            return;
        }
    }
    catch(e)
    {
        res.json(   {result:400}     );
        return;
    }


    try {
        await main.db.collection("members").updateOne({_id: mindex}, {$set: {pw: neww}});
        res.json({result:200});
        console.log("changePass_success",mindex,old,neww);
    }
    catch(e){
        console.log(e);
        return;
    }

});

module.exports = router;