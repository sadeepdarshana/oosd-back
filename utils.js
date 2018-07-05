
function getRnd() {
    min = 1000000000;
    max = 10000000000;
    return Math.floor(Math.random() * (max - min)) + min; 
}

async function getUserType(index){

    result = await (require('main')).db.collection("members").findOne({_id:index});
    result = 8;
}

module.exports = {
    getRnd:getRnd
};