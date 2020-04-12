
/* Menu -----------------------------------------------------*/
let btnmenu = document.getElementById("ouverture-menu");
let objmenu = document.getElementById("menu");
objmenu.style.display = "none";

function drlmenu() {
  statut_menu = getComputedStyle(objmenu).display;
  if (statut_menu == "grid") {
  objmenu.style.display = "none";
  var txt_menu1 = document.getElementById("ouverture-menu").innerHTML.replace("►","◄");
  document.getElementById("ouverture-menu").innerHTML = txt_menu1;
  }
  else {
    objmenu.style.display = "grid";
    var txt_menu2 = document.getElementById("ouverture-menu").innerHTML.replace("◄","►");
    document.getElementById("ouverture-menu").innerHTML = txt_menu2;
  }
}

btnmenu.onclick= drlmenu;




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