document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("todoList");

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${todo} 
                <button class="delete-btn" data-index="${index}">Xóa</button>
            `;
            todoList.appendChild(li);
        });
    }

    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    todoList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            let todos = JSON.parse(localStorage.getItem("todos")) || [];
            const index = event.target.getAttribute("data-index");
            todos.splice(index, 1);
            saveTodos(todos);
            loadTodos();
        }
    });

    // Thêm công việc
    function addTodo() {
        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        const newTodo = todoInput.value;
        
        if (newTodo === "") {
            alert("Vui lòng nhập công việc!");
            return;
        }
        
        todos.push(newTodo);
        saveTodos(todos);
        todoInput.value = "";
        loadTodos();
    }

    addBtn.addEventListener("click", addTodo);

    loadTodos();
});