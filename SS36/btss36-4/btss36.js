const toggleButton = document.querySelector(".dark-mode-toggle");
const body = document.body;
const navbar = document.querySelector(".navbar");

if (localStorage.getItem("darkMode") === "enabled") {
    body.style.background = "#1e1e1e";
    body.style.color = "white";
    navbar.style.background = "#333";
    navbar.style.color = "white";
}

toggleButton.onclick = function () {
    if (body.style.background === "rgb(30, 30, 30)") {
        body.style.background = "#f5f5f5";
        body.style.color = "black";
        navbar.style.background = "white";
        navbar.style.color = "black";
        localStorage.setItem("darkMode", "disabled");
    } else {
        body.style.background = "#1e1e1e";
        body.style.color = "white";
        navbar.style.background = "#333";
        navbar.style.color = "white";
        localStorage.setItem("darkMode", "enabled");
    }
};