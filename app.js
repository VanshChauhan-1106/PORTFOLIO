let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("open");
});
