var express = require('express');
var router = express.Router();

var main = require(require('path').dirname(require.main.filename)+"/main");

router.get('/', function (req, res) {
    main.db.createCollection('members', function(err, collection) {});
    main.db.createCollection('sessionkeys', function(err, collection) {});
    res.send("database ready");
});

module.exports = router;