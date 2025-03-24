document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const positionInput = document.getElementById("positionInput");
    const addEmployeeBtn = document.getElementById("addEmployee");
    const employeeTable = document.getElementById("employeeTable");

    function loadEmployees() {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employeeTable.innerHTML = "";
        
        employees.forEach((employee, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
            `;
            employeeTable.appendChild(row);
        });

        console.log("Danh sách nhân viên:", employees);
    }

    function saveEmployees(employees) {
        localStorage.setItem("employees", JSON.stringify(employees));
        console.log("Đã lưu vào LocalStorage:", employees);
    }

    addEmployeeBtn.addEventListener("click", function () {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        const name = nameInput.value.trim();
        const position = positionInput.value.trim();

        if (name === "" || position === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        employees.push({ name, position });
        saveEmployees(employees);
        nameInput.value = "";
        positionInput.value = "";
        loadEmployees();
    });

    loadEmployees();
});