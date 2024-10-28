let type = sessionStorage.getItem("type");
let addc = sessionStorage.getItem("addc");
let edc = sessionStorage.getItem("edc");
let ccamp = sessionStorage.getItem("changecamp");
let camp_div=document.getElementById("camp_div")
let item_i=3;

if(type == "adm")
{
    for(var i=0;i<4;i++)
    {
        var cs=document.getElementById("camp" + i);
        cs.innerHTML += `<a class="pc" onclick="editc('${"camp" + i}')">Editar</a>`;
    }
}

function editc(item)
{
    sessionStorage.setItem("edc",true);
    sessionStorage.setItem("campid",item);
    window.location.href = "../cadastro regras mecanica criar campanha/criar_campanha/criar_campanha.html";
}

function addcamp()
{
    item_i++;

    var camp_name=sessionStorage.getItem("name_camp");
    var camp_desc=sessionStorage.getItem("desc_name");

    var camp = ` <div id="${'camp' + item_i}">
    <h2 class="data">${camp_name} Active</h2>
    <div class="campanha active">
    <p class="desc-p-2">Insira uma descrição e um tipo de benefício</p>
    <p class="dataa">Data:XX/XX/2024</p>
        <div class="desc">
        <p>Descrição: ${camp_desc}</p>
        </div>
    </div>
    </div>`;

    camp_div.innerHTML += camp;

    if(type == "adm")
    {
        var curcamp=document.getElementById("camp" + item_i);
        curcamp.innerHTML += `<a class="pc" onclick="editc(${'camp' + item_i})">Editar</a>`;
    }
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

if(ccamp == "true")
{
    var curcamp=sessionStorage.getItem("campid");
    var edcamp=camp_div.querySelector("#" + curcamp);
    var camp_name=sessionStorage.getItem("name_camp");
    var camp_desc=sessionStorage.getItem("desc_name");

    var camp = `
    <h2 class="data">${camp_name} Active</h2>
    <div class="campanha active">
    <p class="desc-p-2">Insira uma descrição e um tipo de benefício</p>
    <p class="dataa">Data:XX/XX/2024</p>
        <div class="desc">
        <p>Descrição: ${camp_desc}</p>
        </div>
    </div>`;

    edcamp.innerHTML = camp;

    if(type == "adm")
    {
        edcamp.innerHTML += `<a class="pc" onclick="editc('${curcamp}')">Editar</a>`;
    }

    sessionStorage.setItem("changecamp",false);
}