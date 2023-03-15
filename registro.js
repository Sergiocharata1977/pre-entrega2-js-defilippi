const mail= document.getElementById("mail");
const password= document.getElementById("password");
const formulario= document.getElementById("formRegistro");

formulario.addEventListener("submit",function(event){
    event.preventDefault();

    const datos= {
        mail:mail.value ,
        password:password.value ,
    }
    
    const json = JSON.stringify(datos)
    
    localStorage.setItem("cuentas",json)
    
})




