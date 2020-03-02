

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
men1="False"
men2="False"
men3="False"
men4="False"

let div1 = document.getElementById("1");
let menu1 = document.getElementById("actuellement");

function test1(){
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


let menu2 = document.getElementById("reseau");
let div2 = document.getElementById("2");
function test2(){
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



let menu3 = document.getElementById("langage");
let div3 = document.getElementById("3");
function test3(){
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


let menu4 = document.getElementById("projets");
let div4 = document.getElementById("4");
function test4(){

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

menu1.onclick =test1;
menu2.onclick =test2;
menu3.onclick =test3;
menu4.onclick =test4;






but2.onclick = but;
/*but2.addEventListener("mouseover",function(event){
	document.getElementsById("but2").animate()
}) */
