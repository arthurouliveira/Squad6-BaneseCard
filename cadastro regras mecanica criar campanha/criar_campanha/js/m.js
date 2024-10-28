let b=document.getElementById("enviar");
let edc = sessionStorage.getItem("edc");

b.addEventListener("click",function(){
    if(edc == "true")
    {
        sessionStorage.setItem("edc",false);
        sessionStorage.setItem("changecamp",true);
        window.location.href = "../../tipos de campanhas/Tipos_de_campanha.html";
    }
    else
    {
        sessionStorage.setItem("addc",true);
        window.location.href = "../../tipos de campanhas/Tipos_de_campanha.html";
    }
});

if(edc == "true")
{
    b.textContent = "Editar";
}