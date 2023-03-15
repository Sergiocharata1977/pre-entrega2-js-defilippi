const mail= document.getElementById("mail");
const password= document.getElementById("password");
const formulario= document.getElementById("formLogin");

formulario.addEventListener("submit",function(event){
event.preventDefault();
const json=localStorage.getItem("cuentas")
const datos=JSON.parse(json)

if(mail.value==datos.mail && password.value===datos.password){
    window.location.href="./home.html"
}
else if(mail.value!==datos.mail ){
       alert(" El mail es incorrecto")
       
}
else if (password.value!==datos.password){
       alert(" La constraseña es incorrecta")
}
})


