let products = [
    {
        id: 1,
        name: "iPhone 13",
        price: 20000000,
        quantity: 10,
        company: "Apple"
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 18000000,
        quantity: 15,
        company: "Samsung"
    },
    {
        id: 3,
        name: "Xiaomi Mi 11",
        price: 15000000,
        quantity: 20,
        company: "Xiaomi"
    }
];

let cart = [];
let menu = `
--------MENU--------
1. Hiển thị các sản phẩm theo hãng.
2. Thêm điện thoại mới vào cửa hàng.
3. Tìm kiếm điện thoại theo tên hoặc ID.
4. Mua điện thoại.
5. Thoát.

Mời bạn nhập lựa chọn: 
`;

let input;
while (input !== 5) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let company = prompt("Nhập tên hãng điện thoại: ");
            for (let i in products) {
                if (products[i].company.toLowerCase() === company.toLowerCase()) {
                    console.log("ID:" + products[i].id);
                    console.log("Tên điện thoại:" + products[i].name);
                    console.log("Giá:" + products[i].price);
                    console.log("Số lượng:" + products[i].quantity);
                    console.log("Hãng:" + products[i].company);
                    console.log("-----------------------------");
                }
            }
            break;
        case 2:
            let newId = products.length ? products[products.length - 1].id + 1 : 1;
            let newProduct = {
                id: newId,
                name: prompt("Nhập tên điện thoại: "),
                price: +prompt("Nhập giá điện thoại: "),
                quantity: +prompt("Nhập số lượng điện thoại: "),
                company: prompt("Nhập hãng điện thoại: ")
            };
            products.push(newProduct);
            console.log("Đã thêm sản phẩm mới vào cửa hàng!");
            break;
        case 3:
            let findPhone = prompt("Nhập tên hoặc ID điện thoại: ");
            for (let i in products) {
                if (products[i].name.toLowerCase().includes(findPhone.toLowerCase()) || products[i].id == findPhone) {
                    console.log("ID:" + products[i].id);
                    console.log("Tên điện thoại:" + products[i].name);
                    console.log("Giá:" + products[i].price);
                    console.log("Số lượng:" + products[i].quantity);
                    console.log("Hãng:" + products[i].company);
                    console.log("-----------------------------");
                }
            }
            break;
        case 4:
            let buyId = +prompt("Nhập ID điện thoại muốn mua: ");
            let buyProduct = products.find(p => p.id === buyId);
            if (!buyProduct) {
                console.log("Sản phẩm không tồn tại!");
                break;
            }
            let buyQuantity = +prompt("Nhập số lượng muốn mua: ");
            if (buyQuantity <= 0 || buyQuantity > buyProduct.quantity) {
                console.log("Số lượng không hợp lệ!");
                break;
            }
            let cartItem = cart.find(item => item.id === buyId);
            if (cartItem) {
                cartItem.quantity += buyQuantity;
            } else {
                cart.push({
                    id: buyProduct.id,
                    name: buyProduct.name,
                    price: buyProduct.price,
                    quantity: buyQuantity
                });
            }
            buyProduct.quantity -= buyQuantity;
            console.log("Đã thêm vào giỏ hàng");
            break;
        case 5:
            console.log("Kết thúc chương trình. Cảm ơn!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
            break;
    }
}
