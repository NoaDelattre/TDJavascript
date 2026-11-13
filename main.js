let maDiv1;
let mesDivs;
maDiv1 = document.getElementById("MaDiveNum1");
mesDivs = document.getElementsByName("mesDivs");

function modifierDiv1(div){
    div.innerHTML = "hello";
}

function modifierPlusieursDivs(div){
    for(let i=0; i<div.length; i++){
        div[i].innerHTML = "coucou";
    }
}

modifierDiv1(maDiv1);
modifierPlusieursDivs(mesDivs);