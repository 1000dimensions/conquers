const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('name').value;
Parse.initialize("OztB4qjJCEACbkbjGRvHLpT1huB8nncdcRvBIxQ3","TXk2LiJY4FaxVSXp1xkIpSQtxem6TfuJBjQhuwkw");//hush hush about it
Parse.serverURL = 'https://parseapi.back4app.com/';
async function logn(){
   try{
      Parse.User.logIn(this.uName, this.pass).then((resp) => {
         alert("login Successful", resp);
   });
   }catch(err){
      alert(err + "You got an error!");
   }
}
bogga.onclick = logn; 

