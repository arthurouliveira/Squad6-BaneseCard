const type = sessionStorage.getItem("type");
const addc = sessionStorage.getItem("addc");
const edc = sessionStorage.getItem("edc");
let camp_div=document.getElementById("camp_div")
let item_i=3;
/*
if(type == "adm")
{
    for(var i=0;i<4;i++)
    {
        var cs=document.getElementById("camp" + i)
        cs.innerHTML += `<p class=editar onclick="editc("camp" + ${i})">Editar</p>`;
    }
}

function editc(item)
{
    var curcamp=document.getElementById(item);
}
*/
function addcamp()
{
    item_i++;

    var camp_name=sessionStorage.getItem("name_camp");
    var camp_desc=sessionStorage.getItem("desc_name");

    var camp = ` <div id="camp_div">
    <h2 class="data">${camp_name} Active</h2>
    <div class="campanha active" id="camp" + ${item_i}>
    <p class="desc-p-2">Insira uma descrição e um tipo de benefício</p>
    <p class="dataa">Data:XX/XX/2024</p>
        <div class="desc">
        <p>Descrição: ${camp_desc}</p>
        </div>
    </div>`;

    camp_div.innerHTML += camp;
}

if(addc == "true")
{
    addcamp();
    sessionStorage.setItem("addc",false);
}

if(edc == "true")
{
    sessionStorage.setItem("name_camp","Natal");
    sessionStorage.setItem("desc_name","Campanha de fim de ano, focada em promoções de Natal, decorações e presentes.");
    window.location.href = "../cadastro regras mecanica criar campanha/criar_campanha/criar_campanha.html";
}