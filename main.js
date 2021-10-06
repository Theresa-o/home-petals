// ---------------------------------HAMBURGER---------------------------------

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header-menu");

function toggle() {
    menu.classList.toggle("active-menu");
}
hamburger.addEventListener("click", toggle);


// FAQ------------------------------------------------

var faq = document.getElementsByClassName("faq");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}










































// function toggle(){
//     let menu = document.getElementById("header-ul");

//     if (menu.style.display === "block") {
//         menu.style.display = "none"
//     } else {
//         menu.style.display = "block";

//     }
// }

// document.getElementById("hamburger-btn").addEventListener("click", toggle)



// NEW
// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".header-menu");

// // defining the toggle function
// function toggle() {
//     if (menu.className === "menu-li") {
//         menu.className += "active-menu";
//     } else {
//         menu.className === "menu-li";
//     }
// }
// hamburger.addEventListener("click", toggle);

































// // declaring my variables
// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".header-menu");

// // defining the toggle function
// function toggle() {
//     if (menu.classList.contains("active")) {
//         menu.classList.remove("active");

//         // adding the hamburger icon
//         hamburger.querySelector("a").innerHTML = "<i class=`fas fa-bars`>ham</i>";
//     } else {
//         menu.classList.add(".active");

//         // adding the closing icon
//         hamburger.querySelector("a").innerHTML = "<i class=’fas fa-times’>close</i>";
//     }

// }

// // Event listener
// hamburger.addEventListener("click", toggle);