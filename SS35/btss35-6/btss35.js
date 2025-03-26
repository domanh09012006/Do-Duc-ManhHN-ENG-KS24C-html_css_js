const categoryTable = document.getElementById("categoryTable");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const btnAddCategory = document.getElementById("btnAddCategory");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const btnSave = document.getElementById("btnSave");
const categoryId = document.getElementById("categoryId");
const categoryName = document.getElementById("categoryName");
const errorId = document.getElementById("errorId");
const errorName = document.getElementById("errorName");

let categories = JSON.parse(localStorage.getItem("categories")) || [];

function renderCategories(searchText = "") {
    categoryTable.innerHTML = "";

    categories.forEach(category => {
        if (searchText && !category.name.toLowerCase().includes(searchText.toLowerCase())) return;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${category.id}</td>
            <td>${category.name}</td>
            <td style="color: ${category.status === 'active' ? 'green' : 'red'}">
                ${category.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
            </td>
            <td>
                <button onclick="deleteCategory('${category.id}')">🗑</button>
            </td>
        `;
        categoryTable.appendChild(row);
    });
}

btnAddCategory.onclick = () => {
    modal.style.display = "flex";
};

closeModal.onclick = () => {
    modal.style.display = "none";
};

btnSave.onclick = () => {
    const id = categoryId.value.trim();
    const name = categoryName.value.trim();
    const status = document.querySelector("input[name='status']:checked").value;
    errorId.textContent = id ? "" : "Mã danh mục không được để trống";
    errorName.textContent = name ? "" : "Tên danh mục không được để trống";

    if (!id || !name) return;
    categories.push({ id, name, status });
    localStorage.setItem("categories", JSON.stringify(categories));
    modal.style.display = "none";
    categoryId.value = "";
    categoryName.value = "";
    renderCategories();
};

function deleteCategory(id) {
    categories = categories.filter(cat => cat.id !== id);
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories();
}

btnSearch.onclick = () => {
    renderCategories(searchInput.value);
};

renderCategories();