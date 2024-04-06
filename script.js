const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confpassword");

password.addEventListener("input", checkPasswordsMatch);
passwordConfirm.addEventListener("input", checkPasswordsMatch);

function checkPasswordsMatch(){
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("confpassword").value;
    if(password1 !== password2 && password2 ===""){
        console.log("confirm password");
    } else if(password1 != password2){
        console.log("wrong password");
    } else {
        console.log("they match");
    }
}