/* Menu -----------------------------------------------------*/
/*
var navbar_on = null;


$('#ouverture-menu').on('click',function() {
  if(navbar_on != null) {
    navbar_on = null;
    $('#ouverture-menu').css("transform","rotate(0deg)");
    $('#menu').animate({
      maxHeight:"0px",
      padding:"0px"
    },200, "swing");
  }
  else{
    $('#ouverture-menu').css("transform","rotate(90deg)");
    navbar_on = 1;
    $('#menu').animate({
      maxHeight:"250px",
      padding:"5px 5px"
    },600, "swing");
  }
});
*/


/*-- Égale au code JQuery écrit au dessus ! ------------------------------
let btnmenu = document.getElementById("ouverture-menu");
let objmenu = document.getElementById("menu");
function drlmenu() {
  if (navbar_on != null) {
  btnmenu.style.transform="rotate(0deg)";
  objmenu.style.maxHeight = "0px";
  objmenu.style.padding = "0px";
  objmenu.style.transition = ".2s ease";
  navbar_on = null;
  }
  else {
    btnmenu.style.transform="rotate(90deg)"
    objmenu.style.maxHeight = "250px";
    objmenu.style.padding = "5px 5px";
    objmenu.style.transition = ".6s ease";
    navbar_on=1;
    //var txt_menu2 = document.getElementById("ouverture-menu").innerHTML.replace("◄","►");
    //document.getElementById("ouverture-menu").innerHTML = txt_menu2;
  }
}
btnmenu.onclick= drlmenu;
*/

$(".null").on('click',function() {
  alert("Ce boutton ne mène nulle part, dommage...")
});



/*
window.onload = dessin();
function dessin() {
    var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');
    // Exemples de courbes quadratiques
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
window.onscroll = Scrollmenu();
function Scrollmenu() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 520) {
    document.getElementById("container").className = "test";
  } else {
    document.getElementById("container").className = "";
  }
}
window.onscroll = scrollaction();
function scrollaction() {
  if (document.documentElement.scrollTop >150) {
    document.getElementById("1-article").style.display ="none";
  }
  else{
    document.getElementById("1-article").style.display ="block";
  }
}
*/