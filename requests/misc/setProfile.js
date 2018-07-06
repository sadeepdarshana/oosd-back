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

    sett = {};

    if(fullname)sett.fullname = fullname;
    if(dob)sett.dob = dob;
    if(address)sett.address = address;
    if(tele)sett.tele = tele;
    if(gender)sett.gender = gender;
    if(email)sett.email = email;
    if(batch)sett.batch = batch;

    try {
        await main.db.collection("members").updateOne({_id: index}, {
            $set: sett
        });
        res.status(200).json({result:200});
        console.log("setProfile success",index);
    }catch (e) {

        res.status(409).json({result:409});
    }

});

module.exports = router;