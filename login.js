const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('name').value;
var user = new Parse.Query("log");
async function retreiveU(){
    if(uName != ""){  
        try {
            login = Parse.User
		    .logIn(uName, pass).then(function(login));
            }
        }catch(error){
           alert(error + "You got an error!");
        }
    }
}
function wrong() {
    alert("Wrong Password!");
}
