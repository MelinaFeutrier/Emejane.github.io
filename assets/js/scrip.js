
/*************** Barr Nav ************ */

window.addEventListener('scroll',function(){

    let header = document.querySelector('header');

    header.classList.toggle('abajo',window.scrollY>80)
})


// ************** MENU ***************** //

let menu = document.getElementById("header");
let nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move-content');
    nav.classList.toggle('move-nav');
}
window.addEventListener("resize", function(){

    if(window.innerWidth > 768){
    menu.classList.remove('move-content');
    nav.classList.remove('move-nav');
    }

})

document.getElementById("btn-menu").addEventListener("click", mostrar_menu);


// ************** SCROLL UP ***************** //

document.getElementById("button-up").addEventListener('click', scrollUp);

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0 ){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

let buttonUp = document.getElementById('button-up');

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if(scroll > 200){
        buttonUp.style.transform = "scale(1)";
    }else if (scroll < 100){
        buttonUp.style.transform = "scale(0)"
    }
}





