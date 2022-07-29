// // mobile menu toggle
// var menuIcon = document.getElementById("menu-icon");
// var nav = document.getElementById("nav");
// nav.style.left = "-100%";
// var actualMenuIcon = document.getElementById("actual-menu-icon");

// function toggleMenu() {
//     actualMenuIcon.classList.toggle("fa-xmark");

//     if (nav.style.left == "-100%") {
//         nav.style.left = "0px";
//     } else nav.style.left = "-100%";
// }

// menuIcon.addEventListener("click", toggleMenu); // save time section animation


const requestBtn = document.querySelector(".request-btn");
const featureForm = document.querySelector(".feature-form");
const actualForm = document.querySelector(".actual-form");

requestBtn.addEventListener("click", () => {
    featureForm.style.display = "flex";
    document.body.style.overflow = "hidden";
})


if (featureForm.style.display != 'hidden') {
    window.addEventListener("mouseup", (event) => {
        if (event.target != actualForm) {
            featureForm.style.display = "none";
            document.body.style.overflow = "scroll";
        }
    })
}