var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;
    fullname = req.body.fullname;
    dob = req.body.dob;
    address = req.body.address;
    tele = req.body.tele;
    gender = req.body.gender;
    email = req.body.email;
    batch = req.body.batch;


    console.log("setProfile",index,fullname,dob,address,tele,gender,email,batch);



    try {
        await main.db.collection("members").updateOne({_id: index}, {
            $set: {
                fullname: fullname,
                dob: dob,
                address: address,
                tele: tele,
                gender: gender,
                email: email,
                batch: batch
            }
        });
        res.status(200).json({result:200});
        console.log("setProfile success",index);
    }catch (e) {

        res.status(409).json({result:409});
    }

});

module.exports = router;