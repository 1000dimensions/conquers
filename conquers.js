const cbg = document.querySelector('#map');
const ctx = cbg.getContext('2d');
ctx.fillstyle("green");
ctx.fillRect(0, 0, cbg.height, cbg.width);
var time = Date.now();
var days = time / 1000 / 60 / 60 / 24;
var min = time / 1000 / 60;
var hours = time / 1000 / 60 / 60 / 24;
alert(min);
alert(days);
alert(hours);
