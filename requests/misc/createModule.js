var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', function (req, res) {
    moduleCode = req.body.moduleCode;
    batch = req.body.batch;
    title = req.body.title;
    semester = req.body.semester;


    console.log("createModule",moduleCode,batch,semester,title);



    entry = {_id:batch+"_"+moduleCode, batch:batch, title:title, semester:semester, moduleCode:moduleCode}

    main.db.collection("modules").insertOne(entry, function(err, resi) {
        if (err) {
            res.status(409).json({result:409});
            return;
        }
        res.status(200).json({result:200});
        console.log("createModule",batch+"_"+moduleCode);
    });
});

module.exports = router;