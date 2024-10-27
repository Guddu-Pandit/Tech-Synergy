// ----For preload----
const loader = document.querySelector(".loader");
window.addEventListener("load", preload);
function preload() {
  loader.classList.add("disppear");
}

// ----For nav ----
const navlinks = document.querySelector(".nav-links");
navlinks.style.maxHeight = "0px";
const menuicon = document.querySelector("i");
menuicon.addEventListener("click", () => {
  if (navlinks.style.maxHeight == "0px") {
    navlinks.style.maxHeight = "350px";
  } else {
    navlinks.style.maxHeight = "0px";
  }
});

//  ----For FAQ ----

// const accordionitem = document.querySelectorAll(".accordion");
// const symbol = document.querySelectorAll("span");

// for (i=0 ; i<accordionitem.length; i++){
//     accordionitem[i].addEventListener('click', function(){
//       let result = this.classList.toggle('active')
//         if(result){
//             remove.classList('active');
//         }
//         else{
//         }
//     })
// }

// Select all accordion headers
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    // Collapse all accordion bodies
    document.querySelectorAll(".accordion .accordion-body").forEach((body) => {
      body.style.display = "none";
    });

    // Expand the next sibling (accordion body) of the clicked header
    const nextBody = this.nextElementSibling;
    if (nextBody && nextBody.classList.contains("accordion-body")) {
      nextBody.style.display = "block";
      // nextBody.style.maxHeight = nextBody.scrollHeight + 'px';
    }

    // Reset all span texts to '+'
    document
      .querySelectorAll(".accordion .accordion-header span")
      .forEach((span) => {
        span.textContent = "+";
      });

    // Set the span text of the clicked header to '-'
    const span = this.querySelector("span");
    if (span) {
      span.textContent = "-";
    }
  });
});

const sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav ul li a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};














// ----For No one right click for code----
document.addEventListener("contextmenu", function(e){
    e.preventDefault()
},false);
