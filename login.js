const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('name').value;
var user = new Parse.Query("log");
async function retreiveU(){
    if(uName != ""){  
        try {
            const uname = await user.get(uName);
	    alert(uname);
            const Pas = await uname.get('Pass');
	    alert(Pas);
            if(pass !== Pas) {
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
