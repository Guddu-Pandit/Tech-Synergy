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