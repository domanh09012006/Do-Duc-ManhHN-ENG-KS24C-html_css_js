let tasks = JSON.parse(localStorage.getItem('tasks')) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci Ớt Ớt' }
];

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tableBody = document.getElementById('task-table');
    tableBody.innerHTML = '';
    tasks.forEach((task, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td>
                <button onclick="editTask(${task.id})">Sửa</button>
                <button onclick="deleteTask(${task.id})">Xóa</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
    saveToLocalStorage();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById('taskId').value = task.id;
        document.getElementById('content').value = task.content;
        document.getElementById('dueDate').value = task.dueDate;
        document.getElementById('status').value = task.status;
        document.getElementById('assignedTo').value = task.assignedTo;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveToLocalStorage();
    loadTasks();
}

function handleSubmit() {
    const id = document.getElementById('taskId').value;
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;

    if (id) {
        tasks.forEach(task => {
            if (task.id == id) {
                task.content = content;
                task.dueDate = dueDate;
                task.status = status;
                task.assignedTo = assignedTo;
            }
        });
    } else {
        const newTask = {
            id: tasks.length + 1,
            content,
            dueDate,
            status,
            assignedTo
        };
        tasks.push(newTask);
    }

    saveToLocalStorage();
    document.getElementById('task-form').reset();
    document.getElementById('taskId').value = '';
    loadTasks();
}
