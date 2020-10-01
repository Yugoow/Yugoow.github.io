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


/*Projet gestion*/

window.onload = function() {
  /*Pourcentage d'espace prix pat blocks*/
  px_prct=0.16875;
  screen_width=screen.width;
  proj_nfoc_px=0.15625*screen_width;
  proj_foc_px=0.21875*screen_width;

  px=screen_width*px_prct;
  px_start=(screen_width/2)-proj_foc_px;

  num_proj=1;
  val_px=px_start*num_proj;
  val=val_px.toString()+"px";
  range=verif_space();
  
  $('.projet_block').css("transform","translateX("+val+")");
  $('#'+num_proj+'-projet').css("width",proj_foc_px+"px").css("height","110%");

  num_pair=num_proj+1;
  num_pair_neg=num_proj-1;
  $('#'+num_pair+'-projet').css("opacity",".7");
  $('#'+num_pair_neg+'-projet').css("opacity",".7");

  num_tmp=num_proj+2;
  num_tmp_neg=num_proj-2;
  for (var i = 0; i <= 2; i++) {
    num_tmp+=i;
    num_tmp_neg-=i;
    $('#'+num_tmp+'-projet').css('opacity','0.1');
    $('#'+num_tmp+'-projet img').slideUp();
    $('#'+num_tmp_neg+'-projet').css('opacity','0.1');
    $('#'+num_tmp_neg+'-projet img').slideUp();
  }


} 


$("#left").on('click',function() {
  if (range==false || range=="notright"){
    val_px+=px;
    val=val_px.toString()+"px";
    $('#'+num_proj+'-projet').css("width",proj_nfoc_px+"px").css("height","100%").css("opacity",".7");

    num_proj-=1;
    $('.projet_block').css("transform","translateX("+val+")");
    $('#'+num_proj+'-projet').css("width",proj_foc_px+"px").css("height","110%").css("opacity","1");
    num_tmp=num_proj-1;
    $('#'+num_tmp+'-projet').css("opacity",".7");
    $('#'+num_tmp+'-projet img').show();
    num_tmp=num_proj+2;
    $('#'+num_tmp+'-projet').css('opacity','0.1');
    $('#'+num_tmp+'-projet img').slideUp();
  }
  range=verif_space();
});



$("#right").on('click',function() {
  if (range==false || range=="notleft"){
    val_px-=px;
    val=val_px.toString()+"px";
    $('#'+num_proj+'-projet').css("width",proj_nfoc_px+"px").css("height","100%").css("opacity",".7");
    num_proj+=1;
    $('.projet_block').css("transform","translateX("+val+")");
    $('#'+num_proj+'-projet').css("width",proj_foc_px+"px").css("height","110%").css("opacity","1");
    num_tmp=num_proj+1;
    $('#'+num_tmp+'-projet').css("opacity",".7");
    $('#'+num_tmp+'-projet img').show();
    num_tmp=num_proj-2;
    $('#'+num_tmp+'-projet').css('opacity','0.1');
    $('#'+num_tmp+'-projet img').slideUp();
  }
  range=verif_space();
});


function verif_space() {
  if (val_px+px>600){
    return "notleft";
  }
  else if (val_px-px<-600){
    return "notright";
  }
  else{
    return false;
  }
}


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