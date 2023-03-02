const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('Uname').value;
var user = new Parse.Query("User");
function retreiveU(){
    if(uName != ""){  
        try {
            const uname = await user.get(uName);
        }catch(err){
            throw err + "You got an error!"
        }
    }
}
