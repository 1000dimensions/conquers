const cbg = document.querySelector('#map')
const ctx = cbg.getContext('2d')

var time = Date.now();
var days = time / 1000 / 60 / 60 / 24
var min = time / 1000 / 60;
var hours = time / 1000 / 60 / 60 / 24
console.log(min);
console.log(days);
console.log(hours);