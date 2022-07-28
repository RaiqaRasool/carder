// mobile menu toggle

const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
nav.style.left = "-100%";
const actualMenuIcon = document.getElementById("actual-menu-icon");
function toggleMenu() {
    actualMenuIcon.classList.toggle("fa-xmark");
    if (nav.style.left == "-100%") {
        nav.style.left = "0px";
    }
    else
        nav.style.left = "-100%";


}
menuIcon.addEventListener("click", toggleMenu)


// save time section animation
// let colors = ["#E6F2FF", "#C8FACD", "#FFE6E6"];
// const box1 = document.getElementById("box1");
// const box3 = document.getElementById("box3");
// const box = document.querySelectorAll(".box");
// let distancebox1 = [
//     "-20px",
//     "30px",
//     "-20px"
// ]
// let distancebox2 = [
//     "-20px",
//     "0px",
//     "-20px"
// ]
// function animate_save() {
//     setTimeout(() => {
//         box1.style.left=distancebox1[0];
//         box3.style.left=distancebox2[0];
//     }, 0);
//     setTimeout(()=>{
        
//     })

// }



