const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('name').value;
async function logn(){
   Parse.User.logIn(this.uName, this.pass).then((resp) => {
      alert("login Successful", resp);
   })catch(error){
      alert(error + "You got an error!");
   }
}
bogga.onclick = logn; 

