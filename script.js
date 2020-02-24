let d2 = document.getElementById("Derouler");
let togg2 = document.getElementById("bubutton");

function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  }
}
togg2.onclick = togg;