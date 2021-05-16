
var temp = 0;
var regUsername = document.getElementById("regUser").value;
var regPassword = document.getElementById("regPass").value;

var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
function create(){

    if(true)
    {
        alert("Create Successfully");
        temp = 1;
    }

}

function validate(){
    
   
    if(username===regUsername && password===regPassword)
    {
        alert("Login Successfully");
          return false;
        
    }

    else{
        alert("Login Failed");
        
    }
}