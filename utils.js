
function getRnd() {
    min = 1000000000;
    max = 10000000000;
    return Math.floor(Math.random() * (max - min)) + min; 
}


module.exports = {
    getRnd,getRnd
};