const cbg = document.querySelector('map');
const ctx = cbg.getContext('2d');
Parse.initialize("OztB4qjJCEACbkbjGRvHLpT1huB8nncdcRvBIxQ3","TXk2LiJY4FaxVSXp1xkIpSQtxem6TfuJBjQhuwkw");
Parse.serverURL = 'https://parseapi.back4app.com/';
var time = Date.now();
var days = time / 1000 / 60 / 60 / 24;
var min = time / 1000 / 60;
var hours = time / 1000 / 60 / 60 / 24;
alert(min);
alert(days);
alert(hours);

const button = document.createElement('button');
button.id = "ton";
button.innerText = "Click.";
button.onclick = set; 
const t = new Parse.Object("Time");

async function set {
  t.set("userTime", "N/A");
  t.set("timeFloat", days);
  try{
    await t.save();
    alert("Time has been saved");
  }catch(error){
    alert('Failed to create new object, with error code: ' + error.message);
  }
} 
