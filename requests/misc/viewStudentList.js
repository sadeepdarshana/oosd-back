var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    _id = req.body.module_id;
    console.log("View students");
    result = await main.db.collection("modules").findOne({_id:_id});
    resi= result.students;
    console.log(resi);
    res.status(200).json(resi);
    console.log("viewe_success");

});

module.exports = router;
