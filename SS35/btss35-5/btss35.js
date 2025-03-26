document.addEventListener("DOMContentLoaded", function () {
    const categoryTable = document.getElementById("categoryTable");
    const btnAddCategory = document.getElementById("btnAddCategory");
    const categoryForm = document.getElementById("categoryForm");
    const btnClose = document.querySelector(".close");
    const btnSave = document.getElementById("btnSave");
    const categoryId = document.getElementById("categoryId");
    const categoryName = document.getElementById("categoryName");
    const idError = document.getElementById("idError");
    const nameError = document.getElementById("nameError");

    btnAddCategory.onclick = function () {
        categoryForm.style.display = "flex";
    };

    btnClose.onclick = function () {
        categoryForm.style.display = "none";
    };

    function loadCategories() {
        categoryTable.innerHTML = "";
        let categories = JSON.parse(localStorage.getItem("categories")) || [];

        categories.forEach((category, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${category.id}</td>
                <td>${category.name}</td>
                <td>${category.status === "Đang hoạt động" ? '<span style="color: green;">● Đang hoạt động</span>' : '<span style="color: red;">● Ngừng hoạt động</span>'}</td>
                <td>
                    <button onclick="deleteCategory(${index})" style="color: red;">🗑</button>
                </td>
            `;
            categoryTable.appendChild(row);
        });
    }

    btnSave.onclick = function () {
        let id = categoryId.value;
        let name = categoryName.value;
        let status = document.querySelector('input[name="status"]:checked').value;

        idError.innerText = "";
        nameError.innerText = "";

        if (id === "") {
            idError.innerText = "Mã danh mục không được để trống";
            return;
        }
        if (name === "") {
            nameError.innerText = "Tên danh mục không được để trống";
            return;
        }

        let categories = JSON.parse(localStorage.getItem("categories")) || [];

        categories.push({ id, name, status });
        localStorage.setItem("categories", JSON.stringify(categories));
        loadCategories();
        categoryForm.style.display = "none";
        categoryId.value = "";
        categoryName.value = "";
    };
    window.deleteCategory = function (index) {
        let categories = JSON.parse(localStorage.getItem("categories")) || [];
        categories.splice(index, 1);
        localStorage.setItem("categories", JSON.stringify(categories));
        loadCategories();
    };
    loadCategories();
});