

var utils = require(require('path').dirname(require.main.filename)+"/utils");

var dict = {};


function checkAuth(index,key) {

    console.log("checkAuth",index,key);

    if(index==null)return false;
    if(dict[index]==key)return true;
    return false;
}

function addAuth(index){
    dict[index] = utils.getRnd();
    console.log("generatedKey",index,dict, dict[index]);
    return dict[index];
}


module.exports = {
    checkAuth:checkAuth,
    addAuth:addAuth
};