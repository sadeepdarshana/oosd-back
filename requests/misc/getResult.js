var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");


router.post('/', async function (req, res) {
    index = req.body.index;
    _id = req.body.module_id;
    try{
        result = await main.db.collection('exams').findOne({_id : _id},{'fields':{"_id":0,"results":1}});
        let x = result['results'];
        console.log(x)
        if(x){for (var variable in x) {
            console.log(x[variable])
            console.log(x[variable].index)
            console.log(index);

            if (x[variable].index== index){
                console.log('found')
                res.status(200).json(x[variable]);
                return;
            }
        }
        }

    }
    catch (e) {
        res.status(409).json({result:409});

    }


});

module.exports = router;
