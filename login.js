const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('name').value;
var user = new Parse.Query("log");
async function logn(){
    if(uName != ""){  
        try {
            login = Parse.User
		    .logIn(uName, pass).then(function(login){
		    console.log("Logged in!");
		    
            });
        }catch(error){
           alert(error + "You got an error!");
        }
    }
}
function wrong() {
    alert("Wrong Password!");
}
