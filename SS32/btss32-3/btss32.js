document.getElementById("btn-click").onclick = function() {
    let inputText = document.getElementById("input").value
    let ol = document.getElementById("add-subject");
    if (inputText === "") {
        alert("Không được bỏ trống dữ liệu!");
        return;
    }
    let newItem = document.createElement("li");
    newItem.textContent = inputText;
    ol.appendChild(newItem);
}