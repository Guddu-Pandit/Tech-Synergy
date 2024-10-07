const navlinks = document.querySelector(".nav-links");
const menubtn= document.querySelector(".menu-icon");
const menubtnicon= document.querySelector("i");

menubtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menubtnicon.setAttribute(
        "class", 
        isopen ? "fa-solid fa-bars" : "fa-solid fa-bars"
    );
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menubtnicon.setAttribute("class", "fa-solid fa-bars");
});