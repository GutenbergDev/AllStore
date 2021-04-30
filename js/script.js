
let menuOn = document.querySelectorAll(".menuOn");
let dropOn = document.querySelectorAll(".menu-dropdown1, .menu-dropdown2, .menu-dropdown3, .menu-dropdown4, .menu-dropdown5, .menu-dropdown6, .menu-dropdown7, .menu-dropdown8, .menu-dropdown9, .menu-dropdown10, .menu-dropdown11, .menu-dropdown12, .menu-dropdown13");

function sobreLi() {

    if(dropOn[0].style.display == 'block') {
        dropOn[0].style.display = 'none';
    } else {
        dropOn[0].style.display = 'block';
    }    
}
menuOn[0].addEventListener("mouseover", sobreLi);

function foraLi() {

    if(dropOn[0].style.display == 'block') {
        dropOn[0].style.display = 'none';
    } else {
        dropOn[0].style.display = 'block';
    }
}
menuOn[0].addEventListener("mouseout", foraLi);



/*
function sobreLi() {

    if(dropOn[0].style.display == 'block') {
        dropOn[0].style.display = 'none';
    } else {
        dropOn[0].style.display = 'block';
    }
    
    return foraLi(); 
}
menuOn[0].addEventListener("mouseover", sobreLi);

function foraLi() {

    if(dropOn[0].style.display == 'block') {
        dropOn[0].style.display = 'none';
    } else {
        dropOn[0].style.display = 'block';
    }
}

*/
//menuOn.forEach(abreMenu => {abreMenu.addEventListener("mouseover", sobreLi)});
