//criar_campanha js

let pb=document.getElementById("button");
let name_camp=document.getElementById("nome-campanha");
let desc_camp=document.getElementById("descricao-campanha");

pb.addEventListener("click",function(){
    if(name_camp.value != "" && desc_camp.value != "")
    {
        sessionStorage.setItem("name_camp",name_camp.value);
        sessionStorage.setItem("desc_name",desc_camp.value);
        window.location.href = "regras_eligibilidade.html";
    } 
});