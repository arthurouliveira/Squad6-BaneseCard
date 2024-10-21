
let b=document.getElementById("enviar");

b.addEventListener("click",function(){
    sessionStorage.setItem("addc",true);
    window.location.href = "../tipos de campanhas/Tipos_de_campanha.html";
});