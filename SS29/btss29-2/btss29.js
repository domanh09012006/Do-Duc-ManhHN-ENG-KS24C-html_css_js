
const products = [
    {
        id: 1,
        name: "Khăn giấy",
        price: 20000,
        category: "Đồ dùng cá nhân",
        quantity: 15
    },
    {
        id: 2,
        name: "Tủ lạnh",
        price: 10000000,
        category: "Đồ dùng cá nhân",
        quantity: 7
    },
    {
        id: 3,
        name: "Bếp ga",
        price: 3000000,
        category: "Đồ gia dụng",
        quantity: 5
    },
];


let menu = `
--------MENU--------
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm theo id.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.

Mời bạn nhập lựa chọn: 
`;

let input;
while (input !== 7) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let name = prompt("Nhập tên sản phẩm: ");
            let price = +prompt("Nhập giá sản phẩm: ");
            let category = prompt("Nhập danh mục sản phẩm: ");
            let quantity = +prompt("Nhập số lượng sản phẩm: ");
            if (name && !isNaN(price) && price >= 0 && category && !isNaN(quantity) && quantity >= 0) {
                let newProduct = {
                    id: Math.floor(Math.random() * 10000),
                    name,
                    price,
                    category,
                    quantity
                };
                products.push(newProduct);
                console.log("Sản phẩm đã được thêm:", newProduct);
            } else {
                console.log("Dữ liệu không hợp lệ! Hãy nhập lại.");
            }
            break;
        case 2:
            display();
            break;
        case 3:
            let searchID = +prompt("Nhập ID sản phẩm cần tìm: ");
            let productIndex = search("id", searchID);
            if (productIndex === -1) {
                console.log("Không tìm thấy sản phẩm có ID:", searchID);
            } else {
                displayOneProduct(products[productIndex], productIndex);
            }
            break;
        case 4:
            let updateID = +prompt("Nhập ID sản phẩm muốn cập nhật: ");
            let updateIndex = search("id", updateID);
            if (updateIndex === -1) {
                console.log("Không tìm thấy sản phẩm!");
            } else {
                let newName = prompt("Nhập tên mới: ");
                if (newName) {
                    products[updateIndex].name = newName;
                }
                let newPrice = +prompt("Nhập giá mới: ");
                if (!isNaN(newPrice) && newPrice >= 0) {
                    products[updateIndex].price = newPrice;
                }
                let newCategory = prompt("Nhập danh mục mới: ");
                if (newCategory) {
                    products[updateIndex].category = newCategory;
                }
                let newQuantity = +prompt("Nhập số lượng mới: ");
                if (!isNaN(newQuantity) && newQuantity >= 0) {
                    products[updateIndex].quantity = newQuantity;
                }
                console.log("Sản phẩm sau khi cập nhật:");
                displayOneProduct(products[updateIndex], updateIndex);
            }
            break;
        case 5:
            let deleteID = +prompt("Nhập ID sản phẩm muốn xóa: ");
            let deleteIndex = search("id", deleteID);
            if (deleteIndex === -1) {
                console.log("Không tìm thấy sản phẩm để xóa!");
            } else {
                products.splice(deleteIndex, 1);
                console.log("Đã xóa sản phẩm có ID:", deleteID);
            }
            break;
        case 6:
            let minPrice = +prompt("Nhập giá thấp nhất: ");
            let maxPrice = +prompt("Nhập giá cao nhất: ");
            if (!isNaN(minPrice) && !isNaN(maxPrice) && minPrice >= 0 && maxPrice >= minPrice) {
                let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
                console.log("Danh sách sản phẩm trong khoảng giá:");
                filteredProducts.forEach((p, index) => displayOneProduct(p, index));
            } else {
                console.log("Khoảng giá không hợp lệ!");
            }
            break;

        case 7:
            console.log("Kết thúc chương trình. Cảm ơn!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
            break;
    }
}

function display() {
    products.forEach((product, index) => {
        console.log(`Sản phẩm ${index + 1}:`);
        console.log("ID:", product.id);
        console.log("Tên:", product.name);
        console.log("Giá:", product.price);
        console.log("Danh mục:", product.category);
        console.log("Số lượng:", product.quantity);
        console.log("----------------------------");
    });
}

function displayOneProduct(product, index) {
    console.log(`Sản phẩm ${index + 1}:`);
    console.log("ID:", product.id);
    console.log("Tên:", product.name);
    console.log("Giá:", product.price);
    console.log("Danh mục:", product.category);
    console.log("Số lượng:", product.quantity);
    console.log("----------------------------");
}

function search(key, value) {
    let findIndex = -1;
    for (let i in products) {
        if (products[i][key] === value) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}
