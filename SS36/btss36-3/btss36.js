document.addEventListener("DOMContentLoaded", function() {
    let savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});

document.getElementById("red").onclick = function() {
    changeColor("red");
};
document.getElementById("blue").onclick = function() {
    changeColor("blue");
};
document.getElementById("yellow").onclick = function() {
    changeColor("yellow");
};
document.getElementById("purple").onclick = function() {
    changeColor("purple");
};

function changeColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}