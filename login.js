const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('name').value;
async function logn(){
   try{
      Parse.User.logIn(this.uName, this.pass).then((resp) => {
         alet("login Successful", resp);
   });
   }catch(err){
      alert(err + "You got an error!");
   }
}
bogga.onclick = logn; 

