let but2 = document.getElementById("but2");
let id_div_cache_2 = document.getElementById("id_div_cache_2");
let langage = document.getElementById("langage");
var cacher ="False";
id_div_cache_2.style.display = "none";


function but(){
  if(getComputedStyle(id_div_cache_2).display == "none"){
    id_div_cache_2.style.display = "block";
  }
};


function men(){
let menu = document.getElementById("1")
  if(cacher != "False"){
    menu.style.height="0"
    cacher = "False"
  } else {
  	menu.style.height="70px"
  	cacher = "True"
  }

};

but2.onclick = but
langage.onclick = men;
/*but2.addEventListener("mouseover",function(event){
	document.getElementsById("but2").animate()
}) */
