const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener('click', dat);
function dat() {
    $popup.style.display = 'none'
}
const $footer = document.querySelector("footer");
$footer.addEventListener('click', bo);
function bo() {
    $popup.style.display = 'block'
};

function clor() {
    document.querySelector("nav li:first-child a:last-child").style.background = 'tomato'
};

const $blue = document.querySelector("#blue");
$blue.addEventListener('click', blue);
function blue() {
    $blue.style.background = 'lightcoral'
};


const $sm41 = document.querySelector("#sm41");

function tr() {
    $sm41.style.color = 'red';
    $sm41.style.textDecoration = 'none';
}


$popup.addEventListener('click', tomato)
function tomato() {
    $popup.style.background = 'tomato'
}