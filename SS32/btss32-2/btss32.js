let count = 0;
document.getElementById("btn-click").onclick = function () {
    count++;
    document.getElementById("number").textContent = count;
};