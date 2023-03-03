const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('Uname').value;
var user = new Parse.Query("log");
function retreiveU(){
    if(uName != ""){  
        try {
            const uname = await user.get('Uname');
	    alert(uname);
            const Pas = await user.get('Pass');
	    alert(Pas);
            if(pass !==Pas) {
                wrong();
            }
        }catch(error){
           alert(error + "You got an error!");
        }
    }
}
function wrong() {
    alert("Wrong Password!");
}
