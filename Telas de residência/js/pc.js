const type = sessionStorage.getItem("type");
let c=document.getElementById("campanha-destaque");
let curtype=document.getElementById("type");

if(type == "adm")
{
    c.innerHTML = `<h1>Campanhas em Destaque:</h1>
        <img src="assets/img-3.png" alt="" id="img-campanha">
        <div id="botoes-campanha">
            <button id="botao-1"><a href="../cadastro regras mecanica criar campanha/criar_campanha.html">Adicionar Campanha</a></button>
            <button id="botao-2">Editar Campanha</button>
        </div>`;

    curtype.innerText = "Administrador";
}