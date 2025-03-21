function changeColor(color) {
    document.body.style.backgroundColor = color;
}
document.getElementById("btn-color").onclick = function () {
    let randomColor = `rgb(
    ${Math.floor(Math.random() * 100)},
    ${Math.floor(Math.random() * 100)},
    ${Math.floor(Math.random() * 100)}
    )`;
    changeColor(randomColor);
};
