var shc = require("string-hash-colour");
var md5 = require('MD5');

function num2color(num) {
    return shc.convert(md5(num), {avoid: '#ffffff', proximity: 100});
}

function link(element, scope, attrs) {
    var input    = element.getElementsByTagName('input')[0];
    var colorBox = element.getElementsByTagName('div')[0];

    input.addEventListener('keyup', function() {
        console.log('changing box color');
        var num = input.value;
        var color = num2color(num);
        colorBox.style.backgroundColor = color;
    })
}

module.exports = function() {
    return {
        template: 'hello world'
    };
};
