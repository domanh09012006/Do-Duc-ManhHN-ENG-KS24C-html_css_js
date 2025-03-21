function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value
    if (taskText === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">X</button>`;
    taskList.appendChild(li);
}
function deleteTask(button) {
    let taskItem = button.parentElement;  
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?");
    if (confirmDelete) {
        taskItem.remove();
        alert("Nhiệm vụ đã được xóa!"); 
    } else {
        alert("Nhiệm vụ chưa được xóa!");
    }
}
