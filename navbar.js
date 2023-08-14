let hambg = document.getElementById('hamburgur');
let line = document.getElementsByClassName('line');
// console.log(hambg);
hambg.addEventListener('click', show);
let navbar = document.getElementById('header');
let cross = document.getElementsByClassName('cross');
let ul = document.getElementsByClassName('ul');
let search = document.getElementsByClassName('search');
let sm_btn = document.getElementsByClassName('sm-btn');
heading=document.getElementById('heading')

function show() {
    header.style.height = "210px";
    ul[0].style.display="flex";
    line[0].style.display = "none";
    line[1].style.display = "none";
    line[2].style.display = "none";
    search[0].style.display="block"
    sm_btn[0].style.display="block"
    cross[0].style.display = "block";
    heading.style.display="none"
}

cross[0].addEventListener('click', remove);
function remove() {
    header.style.height = "10vh";
    ul[0].style.display="none";
    search[0].style.display="none"
    sm_btn[0].style.display="none"
    // navbar[0].style.transform = "translateX(-270px)";
    line[0].style.display = "block";
    line[1].style.display = "block";
    line[2].style.display = "block";
    cross[0].style.display = "none";
    heading.style.display="block"
}