let but2 = document.getElementById("but2");

let id_div_cache_2 = document.getElementById("id_div_cache_2");
id_div_cache_2.style.display = "none";

function but(){
  if(getComputedStyle(id_div_cache_2).display == "none"){
    id_div_cache_2.style.display = "block";
  }
};
but2.onclick = but;