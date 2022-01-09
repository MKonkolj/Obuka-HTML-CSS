const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-section");
const bars = document.querySelectorAll(".bar");

burger.addEventListener("click", () => {

    nav.classList.toggle("show");
    for (let i=0; i<bars.length; i++) {
        bars[i].classList.toggle("active");
    };

});