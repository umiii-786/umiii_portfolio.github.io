let hambg = document.getElementById('hamburgur');
let line = document.getElementsByClassName('line');
let heading=document.getElementById('heading')
hambg.addEventListener('click', show);
let navbar = document.getElementById('header');
let cross = document.getElementsByClassName('cross');
let ul = document.getElementsByClassName('ul');
let search = document.getElementsByClassName('search');
let sm_btn = document.getElementsByClassName('sm-btn');
function show() {
    header.style.height = "210px";
    ul[0].style.display = "flex";
    line[0].style.display = "none";
    line[1].style.display = "none";
    line[2].style.display = "none";
    search[0].style.display = "block"
    sm_btn[0].style.display = "block"
    cross[0].style.display = "block";
     heading.style.display="none"
}

cross[0].addEventListener('click', remove);
function remove() {
    header.style.height = "10vh";
    ul[0].style.display = "none";
    search[0].style.display = "none"
    sm_btn[0].style.display = "none"
    line[0].style.display = "block";
    line[1].style.display = "block";
    line[2].style.display = "block";
    cross[0].style.display = "none";
    heading.style.display="block"
}


// servicesection=document.getElementById('#service')
service1=document.getElementsByClassName('service-about')[0]
btn1 = document.getElementsByClassName('readbtn')[0]
btn1.addEventListener('click', show1)
detail= document.getElementsByClassName('detail')
function show1() {
    if (btn1.innerText.includes("Readmore")) {
    detail[0].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
    dolore debitis quo exercitationem nisi minima numquam harum doloremque deserunt ab, quas quasi
    quis tempore molestias, praesentium est qui distinctioLorem `
    btn1.innerText="Readless"
    }
    else{
        detail[0].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
        dolore debitis quo exercitationem nisi minima`
        btn1.innerText="Readmore"
    }
}



service2=document.getElementsByClassName('service-about')[1]
btn2 = document.getElementsByClassName('readbtn')[1]
btn2.addEventListener('click', show2)
detail= document.getElementsByClassName('detail')
function show2() {
    if (btn2.innerText.includes("Readmore")) {
    detail[1].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
    dolore debitis quo exercitationem nisi minima numquam harum doloremque deserunt ab, quas quasi
    quis tempore molestias, praesentium est qui distinctioLorem `
    btn2.innerText="Readless"
    }
    else{
        detail[1].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
        dolore debitis quo exercitationem nisi minima`
        btn2.innerText="Readmore"
        // service2.style.height="170px"
        // service2.style.maxWidth="700px"
    }
}



service3=document.getElementsByClassName('service-about')[2]
btn3 = document.getElementsByClassName('readbtn')[2]
btn3.addEventListener('click', show3)
detail= document.getElementsByClassName('detail')
function show3() {
    if (btn3.innerText.includes("Readmore")) {
    detail[2].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
    dolore debitis quo exercitationem nisi minima numquam harum doloremque deserunt ab, quas quasi
    quis tempore molestias, praesentium est qui distinctioLorem `
    btn3.innerText="Readless"
    // service3.style.height="210px"
    // service3.style.maxWidth="720px"
   
    }
    else{
        detail[2].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
        dolore debitis quo exercitationem nisi minima `
        btn3.innerText="Readmore"
        // service3.style.height="170px"
        // service3.style.maxWidth="700px"
    }
}



service4=document.getElementsByClassName('service-about')[3]
btn4 = document.getElementsByClassName('readbtn')[3]
btn4.addEventListener('click', show4)
detail= document.getElementsByClassName('detail')
function show4() {
    if (btn4.innerText.includes("Readmore")) {
    detail[3].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
    dolore debitis quo exercitationem nisi minima numquam harum doloremque deserunt ab, quas quasi
    quis tempore molestias, praesentium est qui distinctioLorem`
    btn4.innerText="Readless"
    // service4.style.height="210px"
    // service4.style.maxWidth="720px"
   
    }
    else{
        detail[3].innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo nihil culpa similique atque
        dolore debitis quo exercitationem nisi minima `
        btn4.innerText="Readmore"
        // service4.style.height="170px"
        // service4.style.maxWidth="700px"
    }
}

