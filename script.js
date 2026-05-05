console.log("JS loaded correctly");
document.getElementById("loginform").addEventListener("submit", function(event){

    event.preventDefault();

    let gmail=document.getElementById("gmail").value.trim();
    let password= document.getElementById("password").value.trim();
    let gmailerror= document.getElementById ("gmailerror");
    let passworderror= document.getElementById ("passworderror");
    
    gmailerror.textContent="";
    passworderror.textContent="";
    let valid=true;
     
    if (gmail.length<5){
        gmailerror.textContent ="Gmail must be at least 5 characters";
        valid=false;
    } else if(!gmail.endsWith("@gmail.com")){
       gmailerror.textContent ="PLease enter a valid Gmail address";
       valid=false;
    }

    if(password.length<8){

        passworderror.textContent= "password must be at least 8 characters";
        valid= false;
    }

    if(valid){
        alert("Login successful")
    }
} );  