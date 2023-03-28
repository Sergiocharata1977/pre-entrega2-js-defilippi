const contusuarios= document.getElementById("usuarios-conetactados")
 
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(respuesta){
 respuesta.json()
 .then(function(json){
     console.log(json[0].name)
     //contusuarios.innerHTML+="<div>"+json[0].name+"</div>"
     //contusuarios.innerHTML+="<div>"+json[1].name+"</div>"
     //contusuarios.innerHTML+="<div>"+json[2].name+"</div>"
   // for(let i=0;i<json.length;i++){
     //   contusuarios.innerHTML+="<div>"+json[i].name+"</div>"     }
 json.forEach(function(elemento){
    contusuarios.innerHTML +="<div>"+elemento.name+"</div>"
 } );
    })
})