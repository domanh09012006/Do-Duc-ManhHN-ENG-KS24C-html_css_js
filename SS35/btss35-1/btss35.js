let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskList = document.getElementById("task-list");
let addTaskBtn = document.getElementById("add-task-btn");

function renderTasks() {
    taskList.innerHTML = "";
    for (let index in tasks) {
        let taskDiv = `
                    <div class="task">
                        <span>${tasks[index]}</span>
                        <div>
                            <button onclick="editTask(${index})">Sửa</button>
                            <button onclick="deleteTask(${index})">Xóa</button>
                        </div>
                    </div>
                `;
        taskList.innerHTML += taskDiv;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value;
    if (taskText === "") return;
    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
}

function editTask(index) {
    let newTask = prompt("Nhập nội dung mới:", tasks[index]);
    if (newTask !== null && newTask !== "") {
        tasks[index] = newTask;
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskBtn.onclick = addTask;
renderTasks();