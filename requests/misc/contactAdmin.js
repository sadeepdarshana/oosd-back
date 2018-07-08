var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");
var moment = require('moment');

router.post('/', async function (req, res) {
    index = req.body.index;
    topic = req.body.topic;
    description = req.body.description;
    datetime = moment().format();
    console.log("contactAdmin");


    try {
        await main.db.collection("contact").insertOne({topic:topic,description:description,dateTime:datetime,index:index});
    }catch{return;}

    res.status(200).json({result:200});
    console.log("contactAdmin_success");


});

module.exports = router;