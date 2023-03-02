const bogga = document.getElementById('ogga');
const pass = document.getElementById('pass').value;
const uName = document.getElementById('Uname').value;
var user = new Parse.Query("log");
function retreiveU(){
    if(uName != ""){  
        try {
            const uname = await user.get(Uname);
            const Pas = await user.get(Pass);
            if(pass != Pas) {
                wrong();
        }catch(err){
            throw err + "You got an error!"
        }
    }
}
function wrong() {
    document.getElementById('Pass').innerHTML = "Wrong Password!";
