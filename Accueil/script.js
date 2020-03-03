

/*Boutton de TEST */

let but2 = document.getElementById("but2");
let id_div_cache_2 = document.getElementById("id_div_cache_2");
id_div_cache_2.style.display = "none";

function but(){
  if(getComputedStyle(id_div_cache_2).display == "none"){
    id_div_cache_2.style.display = "block";
  }
};

/*  Menu pas opti    */


/* Création des variables  */

men1="False"
men2="False"
men3="False"
men4="False"

/*Récup bouttons par id*/
let div1 = document.getElementById("1");
let menu1 = document.getElementById("actuellement");

let menu2 = document.getElementById("reseau");
let div2 = document.getElementById("2");

let menu3 = document.getElementById("langage");
let div3 = document.getElementById("3");

let menu4 = document.getElementById("projets");
let div4 = document.getElementById("4");

function deroulmenu(){

  /*Récupération de l'id boutton*/
  let a =this.id;


  /*premier bouton*/

    if(a=="actuellement"){
  if(men1 == "False"){
    div1.style.height="75px";
    div1.style.border="none";
    men1="True"
  } else{
    div1.style.height="0px";
    div1.style.border="1px solid black";
    men1="False"
  }
  }



  /*Deuxième bouton*/

    if(a=="reseau"){
  if(men2 == "False"){
    div2.style.height="75px";
    div2.style.border="none";
    men2="True"
  } else{
    div2.style.height="0px";
    div2.style.border="1px solid black";
    men2="False"
  }
  }


  /*troisième bouton*/

    if(a=="langage"){
  if(men3 == "False"){
    div3.style.height="75px";
    div3.style.border="none";
    men3="True"
  } else{
    div3.style.height="0px";
    div3.style.border="1px solid black";
    men3="False"
  }
  }


  /*Quatrième bouton*/

    if(a=="projets"){
  if(men4 == "False"){
    div4.style.height="75px";
    div4.style.border="none";
    men4="True"
  } else{
    div4.style.height="0px";
    div4.style.border="1px solid black";
    men4="False"
  }
  }
}

/*Appel de la fonction au clic*/
menu1.onclick =deroulmenu;
menu2.onclick =deroulmenu;
menu3.onclick =deroulmenu;
menu4.onclick =deroulmenu;






but2.onclick = but;
/*but2.addEventListener("mouseover",function(event){
	document.getElementsById("but2").animate()
}) */
