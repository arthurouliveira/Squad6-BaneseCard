const type = sessionStorage.getItem("type");
const addc = sessionStorage.getItem("addc");
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
*/
function editc(item)
{
    var curcamp=document.getElementById(item);
}

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

if(addc)
{
    addcamp();
    sessionStorage.setItem("addc",false);
}