let dish = [
    { id: 1, name: 'Rau sạch', category: 'Đồ ăn' },
    { id: 2, name: 'Thịt lợn', category: 'Đồ ăn' },
    { id: 3, name: 'Pepsi không calo', category: 'Nước' },
    { id: 4, name: 'Cocacola', category: 'Nước' },
    { id: 5, name: 'Cờ lê', category: 'Dụng cụ' },
    { id: 6, name: 'Tuy vít', category: 'Dụng cụ' },
];

let categorySelect = document.getElementById("categorySelect");
let filterBtn = document.getElementById("filterBtn");
let productList = document.getElementById("productList");


function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}`;
        productList.appendChild(li);
    });
}
filterBtn.onclick = function () {
    let selectedCategory = categorySelect.value;
    let filteredProducts = dish.filter(item => item.category === selectedCategory || selectedCategory === "");
    displayProducts(filteredProducts);
};

displayProducts(dish);