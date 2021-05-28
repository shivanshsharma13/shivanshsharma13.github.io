const getname = document.querySelector(".name")
const strgetname = getname.textContent;
const splitname = strgetname.split("")
getname.textContent = "";


for (let i = 0; i < splitname.length; i++) {
    getname.innerHTML += "<span>" + splitname[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);


function onTick() {
    const span = getname.querySelectorAll('span')[char];
    console.log(span)
    span.classList.add('fade');
    char++;
    if (char === splitname.length) {
        clearInterval(timer);
        timer = null;
        return;
    }
}

