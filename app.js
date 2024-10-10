        // ----For preload----
const loader = document.querySelector(".loader")

window.addEventListener("load", preload);

function preload() {
   loader.classList.add("disppear");
}


        // ----For nav ----
const navlinks = document.querySelector(".nav-links");
navlinks.style.maxHeight = "0px";
const menuicon = document.querySelector("i");
menuicon.addEventListener("click", () => {
    if(navlinks.style.maxHeight == "0px")
    {
        navlinks.style.maxHeight = "350px";
    }
    else{
        navlinks.style.maxHeight = "0px";
    }
});


    // ----For No one right click for code----
// document.addEventListener("contextmenu", function(e){
//     e.preventDefault()
// },false);