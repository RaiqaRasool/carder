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
const animFeatureForm = document.querySelector("anim-featureform");

requestBtn.addEventListener("click", () => {
    featureForm.classList.add("anim-featureform");
    featureForm.style.display = "flex";
    document.body.style.overflow = "hidden";
})


window.addEventListener("mouseup", (event) => {
    if (featureForm.style.display == 'flex') {
        if (!actualForm.contains(event.target)) {
            featureForm.style.display = "none";
            document.body.style.overflow = "scroll";
        }
    }
})

