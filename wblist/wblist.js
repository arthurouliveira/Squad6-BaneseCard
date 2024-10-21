let b=document.getElementById("button");
let pop=document.getElementById("popdiv");
let popon=false;
let l="";
let whitelist=document.getElementById("whitelist");
let blacklist=document.getElementById("blacklist");

function popup()
{
    var p=`<div id="popup">
                <button onclick="white()">WhiteList</button>
                <button onclick="black()">BlackList</button>
                <input type="text" placeholder="Username" id="text" required></input>
                <button onclick="addItem()">Adicionar</button>
            </div>`;
    
    if(!popon)
    {
        pop.innerHTML += p;
    }
    else
    {
        pop.innerHTML = ``;
    }
    popon = !popon;
};

function addItem()
{
    var t=document.getElementById("text");

    if(t.value != "")
    {
        var item=`<div class="item">
            <img src="Generic avatar.png" class="us">
            <img src="Edit 4.png" class="edit">
            <h2>${t.value}</h2>
            </div>`

        if(l == "white")
        {
            whitelist.innerHTML += item;
        }
        else
        {
            blacklist.innerHTML += item;
        }

        if(popon)
        {
            pop.innerHTML = ``;
            popon=false;
        }
    }
}

function white(){
    l="white";
}

function black(){
    l="black";
}

b.addEventListener("click",function(){
    popup();
});